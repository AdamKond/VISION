# Analiza stylu „VIRAL – scena z drona" (z inspiracji)

Plik: `inspirations/viral scena z drona.mp4`. 720×1280 (9:16), 30 fps, 8,24 s.

## Czym jest
To **template edukacyjny** twórcy INTERIOR&FOTO: „PERFECT VIDEOS – CREATED BY PHOTOS – PART 07".
- Górna część kadru: 3 miniatury źródłowe („1st / 2nd / FINAL PHOTO") — pokazuje, że film powstał ze zdjęć.
- Dolny duży panel: efekt = **dynamiczny przelot FPV/„dronowy" przez luksusowe wnętrze** (open space).

## Charakter (sedno do odtworzenia)
- **Szybki, ciągły przelot do przodu** przez przestrzeń, z wyraźnym **motion blur** — energia FPV.
- Dużo dynamiki (inaczej niż powolny push-in w DAY VS NIGHT).
- Tworzone **ze zdjęć** (2–3 jako klatki kluczowe) → image-to-video.

## Jak odtworzyć (nasz pipeline)
1. Zdjęcia wnętrza (najlepiej z głębią: korytarz → salon → przeszklenie). 1–3 sztuki.
2. Higgsfield `kling3_0` (pro), `start_image` = pierwsze pomieszczenie; opcjonalnie `end_image`
   = docelowe pomieszczenie → przelot „z A do B".
3. Prompt na szybki FPV: „fast smooth FPV drone fly-through, camera rushes forward through the
   luxury interior, sweeping motion, motion blur, cinematic, photorealistic, no people".
   Dłuższy klip (8 s) = więcej drogi. ~7–14 kr/klip (pro).
4. Montaż 9:16 w Remotion (pełny ekran lub blur-bg), ew. hook na starcie.
   Opcjonalnie stabilizacja vidstab, ale tu chcemy zostawić dynamikę.

## Uwaga
Górny „template" (1st/2nd/final photo) to branding twórcy — my robimy sam przelot na pełnym kadrze 9:16.
Zob. też `szablony/jak-zrobic-day-vs-night.md` (ten sam pipeline image-to-video).
