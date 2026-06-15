# Przepis: jak zrobić rolkę DAY VS NIGHT (sprawdzony pipeline)

Format: 9:16 (1080×1920), 4 ujęcia dzień → 4 ujęcia noc, napis „Day vs Night" na środku,
powolne wgłębienie kamery (push-in), ustabilizowane. Koszt: ~56 kr (Higgsfield) + reszta za darmo.

## Krok 1 — Zdjęcia (dzień)
- 4 zdjęcia tego samego mieszkania (różne kąty), w dzień. Poziome 16:9 są OK (kadrujemy do 9:16).
- Zapisz w `wideo-remotion/public/` jako `dvn-day-1.jpg` … `dvn-day-4.jpg`.

## Krok 2 — Wersje nocne (ChatGPT, za darmo)
- Dla każdego zdjęcia użyj promptu z `szablony/prompt-day-to-night.md` w ChatGPT.
- Zapisz wyniki jako `dvn-night-1.png` … `dvn-night-4.png` w `public/`.
- WAŻNE: ten sam kadr co dzień (żeby noc nakładała się 1:1).

## Krok 3 — Ruch kamery (Higgsfield, Kling 3.0 PRO)
- Upload zdjęć: `media_upload` → `curl PUT` na presigned URL → `media_confirm`.
- `generate_video`: model `kling3_0`, `mode: pro`, `sound: off`, `aspect_ratio: 9:16`,
  `duration: 4`, `medias:[{role:start_image, value:<media_id>}]`.
- Prompt: „Slow cinematic dolly push-in: camera moves smoothly and steadily straight forward,
  deeper into the room, like a real steadicam. Constant slow speed, stable horizon, realistic
  parallax, no warping or morphing. Photorealistic, no people, scene unchanged."
- **Koszt: 7 kr/klip (4 s, pro) = 56 kr za 8 klipów.** (std=4,5 kr ale gorsza jakość; preflight `get_cost:true`.)
- Pobierz wyniki do `public/` jako `dvn-mv-day-1.mp4` … `dvn-mv-night-4.mp4`.

## Krok 4 — Stabilizacja (za darmo, ffmpeg vidstab)
- Wymaga pełnego ffmpeg: `npm install ffmpeg-static` (ten z Remotion ma wyłączone filtry!).
- Dla każdego klipu, 2 przebiegi:
  1. `ffmpeg -i in.mp4 -vf "vidstabdetect=shakiness=10:accuracy=15:result=trf.trf" -f null -`
  2. `ffmpeg -i in.mp4 -vf "vidstabtransform=input=trf.trf:smoothing=24:optzoom=1,unsharp=5:5:0.6:5:5:0" -c:v libx264 -crf 18 -pix_fmt yuv420p -an out.mp4`
- smoothing 24 = spokojnie; 40 = jeszcze bardziej; mniej = zostaje więcej ruchu.
- Oryginały trzymaj w `public/_orig/`.

## Krok 5 — Montaż (Remotion, za darmo)
- Kompozycja `DayVsNight` (`src/DayVsNight.tsx`): klipy w kolejności 4× dzień → 4× noc.
- Parametry: `DISP=120` (4 s/ujęcie), `XF=12` (przenikanie 0,4 s). Napis serif „Day/vs/Night"
  na środku, „Day"→„Night" na granicy aktów. Render `npx remotion render DayVsNight out/....mp4`.
- Krótszy Reels: zmniejsz `DISP` (np. 60 = 2 s/ujęcie → ~16 s całości).

## Krok 6 — (opcja) Muzyka
- Wrzuć `.mp3` do `public/`, dodaj `<Audio>` w kompozycji.

## Zob. też
- `szablony/analiza-day-vs-night.md` — analiza oryginalnych inspiracji (kadencja, ruch).
- `szablony/prompt-day-to-night.md` — prompt do nocy w ChatGPT.
