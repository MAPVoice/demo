# Flow Acceleration Audio

This directory contains audio examples for comparing MAPVoice Parameter-Efficient
Flow Acceleration at 2, 4, 8, and 16 neural function evaluations (NFE).

The same reference-target pair and random seed are used at every NFE so that the
only sampling variable is the number of Euler ODE steps. The five samples use a
2-clean, 2-noisy, and 1-numeric composition. They do not overlap with the 20
utterances used in the Gradio MOS study.

## Model and inference settings

- Model: MAPVoice-Distill 2000h (PeFA)
- Checkpoint: `distill/stage1_new/checkpoint-200000.pt`
- ODE solver: Euler
- Guidance scale: 1.0 through the learned guidance-scale embedding
- Time-shift coefficient: 0.5
- Seed: 666
- NFE: 2, 4, 8, and 16
- Audio: mono PCM WAV, 24 kHz

## Layout

- `references/`: speaker reference audio
- `ground_truth/`: target recordings
- `step_2/`, `step_4/`, `step_8/`, `step_16/`: generated audio
- `flow_manifest.csv`: text, provenance, settings, and relative audio paths
