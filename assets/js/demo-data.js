window.DEMO_DATA = {
  systems: [
    { key: "gt", label: "GT" },
    { key: "cosyvoice3", label: "CosyVoice 3" },
    { key: "qwen06b", label: "Qwen3-TTS-0.6B" },
    { key: "qwen17b", label: "Qwen3-TTS-1.7B" },
    { key: "peftTts", label: "PEFT-TTS" },
    { key: "zipvoice", label: "ZipVoice" },
    { key: "mapvoice700h", label: "MAPVoice 700h", highlight: true },
    { key: "mapvoice2000h", label: "MAPVoice 2000h", highlight: true },
    { key: "distill700h", label: "MAPVoice-Distill 700h", highlight: true },
    { key: "distill2000h", label: "MAPVoice-Distill 2000h", highlight: true }
  ],

  comparison: [
    {
      id: "Z01",
      referenceText: "Reference transcription will be added.",
      targetText: "Target transcription will be added.",
      reference: "",
      audio: {}
    },
    {
      id: "Z02",
      referenceText: "Reference transcription will be added.",
      targetText: "Target transcription will be added.",
      reference: "",
      audio: {}
    },
    {
      id: "Z03",
      referenceText: "Reference transcription will be added.",
      targetText: "Target transcription will be added.",
      reference: "",
      audio: {}
    }
  ],

  flowSystems: [
    { key: "mapvoiceFull", label: "MAPVoice", group: "Full-parameter" },
    {
      key: "distillFull",
      label: "MAPVoice-Distill (Full)",
      group: "Full-parameter",
      highlight: true
    },
    { key: "mapvoicePeft", label: "MAPVoice", group: "Parameter-efficient" },
    {
      key: "distillPeft",
      label: "MAPVoice-Distill (PEFT)",
      group: "Parameter-efficient",
      highlight: true
    }
  ],

  flowAcceleration: [
    {
      id: "F01",
      referenceText: "Reference transcription will be added.",
      targetText: "Target transcription will be added.",
      reference: "",
      audio: {}
    },
    {
      id: "F02",
      referenceText: "Reference transcription will be added.",
      targetText: "Target transcription will be added.",
      reference: "",
      audio: {}
    }
  ]
};
