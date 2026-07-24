(() => {
  "use strict";

  const data = window.DEMO_DATA || {
    systems: [],
    comparisonLayout: [],
    comparison: [],
    flowSystems: [],
    flowSteps: [2, 4, 8, 16],
    flowAcceleration: []
  };

  function audioPlayer(src, label) {
    const wrapper = document.createElement("div");
    wrapper.className = "audio-cell";

    if (!src) {
      const pending = document.createElement("span");
      pending.className = "audio-pending";
      pending.textContent = "Coming soon";
      wrapper.appendChild(pending);
      return wrapper;
    }

    const caption = document.createElement("span");
    caption.className = "audio-label";
    caption.textContent = label;

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.controlsList = "nodownload";
    audio.preload = "none";

    const source = document.createElement("source");
    source.src = src;
    source.type = "audio/wav";

    audio.appendChild(source);
    audio.append("Your browser does not support the audio element.");
    wrapper.append(caption, audio);
    return wrapper;
  }

  function headerCell(label, className = "") {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = label;
    cell.className = className;
    return cell;
  }

  function renderComparison() {
    const thead = document.getElementById("comparison-head");
    const tbody = document.getElementById("comparison-body");
    if (!thead || !tbody) return;

    const systemsByKey = Object.fromEntries(
      data.systems.map((system) => [system.key, system])
    );
    const headerRows = data.comparisonLayout.map(() =>
      document.createElement("tr")
    );
    const promptHeading = headerCell(
      "Audio Prompt",
      "sticky-column sticky-column--reference"
    );
    const textHeading = headerCell("Text Prompt");
    const gtHeading = headerCell("GT");

    [promptHeading, textHeading, gtHeading].forEach((heading) => {
      heading.rowSpan = data.comparisonLayout.length;
      headerRows[0].appendChild(heading);
    });
    data.comparisonLayout.forEach((systemKeys, rowIndex) => {
      systemKeys.forEach((key) => {
        const system = systemsByKey[key];
        headerRows[rowIndex].appendChild(
          headerCell(
            system.label,
            system.highlight ? "highlight-column" : ""
          )
        );
      });
    });
    thead.append(...headerRows);

    data.comparison.forEach((sample) => {
      const rows = data.comparisonLayout.map(() =>
        document.createElement("tr")
      );
      rows[0].className = "comparison-row comparison-row--primary";
      rows[1].className = "comparison-row comparison-row--secondary";

      const reference = document.createElement("td");
      reference.className = "sticky-column sticky-column--reference";
      reference.rowSpan = data.comparisonLayout.length;
      reference.appendChild(audioPlayer(sample.reference, "Audio prompt"));
      const referenceText = document.createElement("span");
      referenceText.className = "reference-text";
      referenceText.textContent = sample.referenceText;
      reference.appendChild(referenceText);

      const text = document.createElement("td");
      text.className = "text-cell";
      text.rowSpan = data.comparisonLayout.length;
      text.textContent = sample.targetText;

      const gt = document.createElement("td");
      gt.rowSpan = data.comparisonLayout.length;
      gt.appendChild(audioPlayer(sample.audio.gt, "GT"));

      rows[0].append(reference, text, gt);
      data.comparisonLayout.forEach((systemKeys, rowIndex) => {
        systemKeys.forEach((key) => {
          const system = systemsByKey[key];
          const result = document.createElement("td");
          if (system.highlight) result.className = "highlight-column";
          result.appendChild(audioPlayer(sample.audio[key], system.label));
          rows[rowIndex].appendChild(result);
        });
      });
      tbody.append(...rows);
    });
  }

  function renderFlowAcceleration() {
    const thead = document.getElementById("flow-head");
    const tbody = document.getElementById("flow-body");
    if (!thead || !tbody) return;

    const modelRow = document.createElement("tr");
    const stepRow = document.createElement("tr");
    const referenceHeading = headerCell(
      "Audio Prompt",
      "sticky-column sticky-column--reference"
    );
    const targetHeading = headerCell("Text Prompt");
    const gtHeading = headerCell("GT");

    [referenceHeading, targetHeading, gtHeading].forEach((heading) => {
      heading.rowSpan = 2;
      modelRow.appendChild(heading);
    });

    data.flowSystems.forEach((system) => {
      const heading = headerCell(
        system.label,
        `model-heading${system.highlight ? " highlight-column" : ""}`
      );
      heading.colSpan = data.flowSteps.length;
      heading.scope = "colgroup";
      modelRow.appendChild(heading);

      data.flowSteps.forEach((step) => {
        stepRow.appendChild(
          headerCell(
            `${step} steps`,
            system.highlight ? "highlight-column step-heading" : "step-heading"
          )
        );
      });
    });
    thead.append(modelRow, stepRow);

    const flowSamples = data.flowAcceleration.length
      ? data.flowAcceleration
      : data.comparison;

    flowSamples.forEach((sample) => {
      const row = document.createElement("tr");

      const reference = document.createElement("td");
      reference.className = "sticky-column sticky-column--reference";
      reference.appendChild(audioPlayer(sample.reference, "Audio prompt"));
      const referenceText = document.createElement("span");
      referenceText.className = "reference-text";
      referenceText.textContent = sample.referenceText;
      reference.appendChild(referenceText);

      const text = document.createElement("td");
      text.className = "text-cell";
      text.textContent = sample.targetText;

      const gt = document.createElement("td");
      gt.appendChild(audioPlayer(sample.audio.gt, "GT"));

      row.append(reference, text, gt);
      data.flowSystems.forEach((system) => {
        data.flowSteps.forEach((step) => {
          const result = document.createElement("td");
          if (system.highlight) result.className = "highlight-column";
          const flowAudio = sample.audio?.[system.key]?.[step] || "";
          result.appendChild(audioPlayer(flowAudio, `${step} steps`));
          row.appendChild(result);
        });
      });
      tbody.appendChild(row);
    });
  }

  renderComparison();
  renderFlowAcceleration();
})();
