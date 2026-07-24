# MAPVoice Audio Demo

Static audio demonstration page for MAPVoice.

## 2. 수정해야 할 파일

### `index.html`

Update the following items before publication.

- Paper / Code links
- Abstract
- Citation
- Section descriptions

### `assets/js/demo-data.js`

This file contains the system list, transcripts, and audio paths.

Example:

```javascript
{
  id: "Z01",
  referenceText: "Reference transcription",
  targetText: "Target transcription",
  reference: "samples/zero_shot/z01_reference.wav",
  audio: {
    gt: "samples/zero_shot/z01_gt.wav",
    cosyvoice3: "samples/zero_shot/z01_cosyvoice3.wav",
    mapvoice2000h: "samples/zero_shot/z01_mapvoice_2000h.wav"
  }
}
```

### `samples/`

The included WAV files are silent placeholders. Add the final evaluation audio and
reference each file from `demo-data.js`.

## 3. 로컬 확인

Run the following command from the repository root.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## 4. Release check

Run the local release check before every public push.

```text
./scripts/check-release.sh
```

## 5. GitHub Pages 활성화

In the repository settings:

1. Open `Settings` and then `Pages`.
2. Select `Deploy from a branch`.
3. Select `main` and `/(root)`.
4. Save the configuration.

## 6. Paper link

Use the following sentence while only audio samples are public.

```latex
Audio samples are available at \url{https://mapvoice.github.io/demo/}.
```

## 7. Publication checklist

- Remove all placeholder content.
- Verify every audio player on desktop and mobile.
- Verify the Paper and Code links.
- Confirm that all audio can be distributed publicly.
- Remove private participant information and non-public data.
- Normalize audio loudness and use consistent sample rates.
