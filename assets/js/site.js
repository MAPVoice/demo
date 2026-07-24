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
    const textHeading = headerCell("Text Prompt", "divider-right");
    const gtHeading = headerCell("GT", "divider-right");

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

      const text = document.createElement("td");
      text.className = "text-cell divider-right";
      text.rowSpan = data.comparisonLayout.length;
      text.textContent = sample.targetText;

      const gt = document.createElement("td");
      gt.className = "divider-right";
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

    const headerRow = document.createElement("tr");
    const referenceHeading = headerCell(
      "Audio Prompt",
      "sticky-column sticky-column--reference"
    );
    const targetHeading = headerCell("Text Prompt", "divider-right");
    const gtHeading = headerCell("GT", "divider-right");
    headerRow.append(referenceHeading, targetHeading, gtHeading);

    data.flowSystems.forEach((system) => {
      const heading = headerCell(
        system.label,
        `model-heading${system.highlight ? " highlight-column" : ""}`
      );
      headerRow.appendChild(heading);
    });
    thead.appendChild(headerRow);

    const flowSamples = data.flowAcceleration.length
      ? data.flowAcceleration
      : data.comparison;

    flowSamples.forEach((sample) => {
      const row = document.createElement("tr");

      const reference = document.createElement("td");
      reference.className = "sticky-column sticky-column--reference";
      reference.appendChild(audioPlayer(sample.reference, "Audio prompt"));

      const text = document.createElement("td");
      text.className = "text-cell divider-right";
      text.textContent = sample.targetText;

      const gt = document.createElement("td");
      gt.className = "divider-right";
      gt.appendChild(audioPlayer(sample.audio.gt, "GT"));

      row.append(reference, text, gt);
      data.flowSystems.forEach((system) => {
        const result = document.createElement("td");
        if (system.highlight) result.className = "highlight-column";
        const stepGrid = document.createElement("div");
        stepGrid.className = "step-audio-grid";

        data.flowSteps.forEach((step) => {
          const stepItem = document.createElement("div");
          stepItem.className = "step-audio-item";
          const stepLabel = document.createElement("span");
          stepLabel.className = "step-audio-label";
          stepLabel.textContent = `${step} steps`;
          const flowAudio = sample.audio?.[system.key]?.[step] || "";
          stepItem.append(stepLabel, audioPlayer(flowAudio, `${step} steps`));
          stepGrid.appendChild(stepItem);
        });
        result.appendChild(stepGrid);
        row.appendChild(result);
      });
      tbody.appendChild(row);
    });
  }

  renderComparison();
  renderFlowAcceleration();
})();
