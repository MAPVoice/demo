# Flow Acceleration Audio

This directory contains audio examples for comparing MAPVoice 2000h,
MAPVoice-Distill (PEFT), and MAPVoice-Distill (Full) at 2, 4, 8, and 16 neural
function evaluations (NFE).

The same reference-target pair and random seed are used at every NFE so that the
only sampling variable is the number of Euler ODE steps. The five samples use a
2-clean, 2-noisy, and 1-numeric composition. They do not overlap with the 20
utterances used in the Gradio MOS study.

## Model and inference settings

- MAPVoice 2000h checkpoint: `checkpoint-300000.pt`
- MAPVoice-Distill (PEFT) checkpoint: `distill/stage1_new/checkpoint-200000.pt`
- MAPVoice-Distill (Full) checkpoint: `distill/full/stage1/checkpoint-200000.pt`
- ODE solver: Euler
- Guidance scale: 1.0 through the learned guidance-scale embedding
- Time-shift coefficient: 0.5
- Seed: 666
- NFE: 2, 4, 8, and 16
- Audio: mono PCM WAV, 24 kHz

## Layout

- `references/`: speaker reference audio
- `ground_truth/`: target recordings
- `mapvoice_2000h/`: MAPVoice outputs grouped by NFE
- `mapvoice_distill_peft/`: parameter-efficient distillation outputs grouped by NFE
- `mapvoice_distill_full/`: full-parameter distillation outputs grouped by NFE
- `flow_manifest.csv`: text, provenance, settings, and relative audio paths
