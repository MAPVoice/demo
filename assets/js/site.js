(() => {
  "use strict";

  const data = window.DEMO_DATA || {
    systems: [],
    comparison: [],
    ablation: []
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

  function renderAblation() {
    const tbody = document.getElementById("ablation-body");
    if (!tbody) return;

    data.ablation.forEach((sample) => {
      const row = document.createElement("tr");

      const id = document.createElement("td");
      id.className = "sample-id";
      id.textContent = sample.id;

      const text = document.createElement("td");
      text.className = "text-cell";
      text.textContent = sample.targetText;

      const shared = document.createElement("td");
      shared.appendChild(audioPlayer(sample.sharedLora, "Shared LoRA"));

      const conv = document.createElement("td");
      conv.appendChild(audioPlayer(sample.convAdapter, "Conv-Adapter"));

      const mapvoice = document.createElement("td");
      mapvoice.className = "highlight-column";
      mapvoice.appendChild(audioPlayer(sample.mapvoice, "Combined"));

      row.append(id, text, shared, conv, mapvoice);
      tbody.appendChild(row);
    });
  }

  renderComparison();
  renderAblation();
})();
