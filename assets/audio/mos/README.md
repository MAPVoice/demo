# MAPVoice MOS Demo Audio

This directory contains the 20 utterances used in the MAPVoice listening
evaluation.

## Contents

- `references/`: 20 reference-speaker prompts
- `ground_truth/`: 20 natural target recordings
- Ten TTS system directories: 20 generated recordings per system
- `demo_manifest.csv`: public relative-path mapping, without local server paths
- `SHA256SUMS`: SHA-256 checksums for all 240 WAV files

The sample composition is 10 clean, 5 noisy, and 5 numeric-text items.

## Demo integration

The corresponding transcripts and public audio paths are defined in
`assets/js/demo-data.js`. WAV files are committed as regular Git objects because
Git LFS objects are not served directly by GitHub Pages.

This package contains no local absolute paths or participant-rating data.
