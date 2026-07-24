(() => {
  "use strict";

  const data = window.DEMO_DATA || {
    systems: [],
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

    thead.append(
      headerCell("Sample", "sticky-column sticky-column--id"),
      headerCell("Reference", "sticky-column sticky-column--reference"),
      headerCell("Target text")
    );
    data.systems.forEach((system) => {
      thead.appendChild(
        headerCell(system.label, system.highlight ? "highlight-column" : "")
      );
    });

    data.comparison.forEach((sample) => {
      const row = document.createElement("tr");

      const id = document.createElement("td");
      id.className = "sample-id sticky-column sticky-column--id";
      id.textContent = sample.id;

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

      row.append(id, reference, text);
      data.systems.forEach((system) => {
        const result = document.createElement("td");
        if (system.highlight) result.className = "highlight-column";
        result.appendChild(audioPlayer(sample.audio[system.key], system.label));
        row.appendChild(result);
      });
      tbody.appendChild(row);
    });
  }

  function renderFlowAcceleration() {
    const thead = document.getElementById("flow-head");
    const tbody = document.getElementById("flow-body");
    if (!thead || !tbody) return;

    const modelRow = document.createElement("tr");
    const stepRow = document.createElement("tr");
    const sampleHeading = headerCell(
      "Sample",
      "sticky-column sticky-column--id"
    );
    const referenceHeading = headerCell(
      "Reference",
      "sticky-column sticky-column--reference"
    );
    const targetHeading = headerCell("Target text");

    [sampleHeading, referenceHeading, targetHeading].forEach((heading) => {
      heading.rowSpan = 2;
      modelRow.appendChild(heading);
    });

    data.flowSystems.forEach((system) => {
      const heading = headerCell(
        system.label,
        `model-heading${system.highlight ? " highlight-column" : ""}`
      );
      const group = document.createElement("span");
      group.className = "system-group";
      group.textContent = system.group;
      heading.prepend(group);
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

      const id = document.createElement("td");
      id.className = "sample-id sticky-column sticky-column--id";
      id.textContent = sample.id;

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

      row.append(id, reference, text);
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
