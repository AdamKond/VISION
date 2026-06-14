# Szablon: prompt do filmu z nieruchomości (Higgsfield)

Modele: **Kling 3.0** (audio + multi-shot, najlepszy tour) lub **Seedance 2.0** (spójność).
Format: `9:16` → Reels/TikTok; `16:9` → YouTube/strona. Czas: 4–10 s na ujęcie.

## Struktura promptu (image-to-video, start_image = zdjęcie wnętrza)
```
[RUCH KAMERY] + [PRZESTRZEŃ] + [ŚWIATŁO/NASTRÓJ] + [DETAL] + [TEMPO]
```

## Gotowe warianty

### 1. Salon — wejście „reveal"
> Slow cinematic dolly-in through a bright modern living room, soft natural daylight from
> large windows, warm cozy atmosphere, camera gently glides forward revealing the space,
> smooth steady gimbal motion, real-estate showcase, photorealistic, 4k.

### 2. Kuchnia — przesuw boczny
> Smooth lateral tracking shot across a clean modern kitchen, sunlight reflecting on
> countertops, slow elegant camera glide, premium real-estate ad style, photorealistic.

### 3. Sypialnia — miękki najazd
> Gentle slow push-in toward a serene bedroom, soft morning light, calm relaxing mood,
> subtle camera movement, cinematic depth of field, photorealistic real-estate tour.

### 4. Hook na Reels (pierwsze 2 s)
> Fast smooth reveal from doorway into a stunning apartment, dynamic but elegant camera
> motion, eye-catching first frame, vertical 9:16, scroll-stopping, photorealistic.

## Lektor PL (osobno przez generate_audio lub w opisie sceny)
Przykład skryptu (dopasować dane z `oferta.md`):
> „Witaj w swoim nowym domu. {metraż} m² światła i przestrzeni w sercu {dzielnica}.
> {atut_1}, {atut_2} — i wszystko, czego potrzebujesz, tuż za rogiem. Umów się na oglądanie."

## Checklist przed generacją
- [ ] Zdjęcie wgrane (`media_upload_widget` / `media_import_url`) → mam `media_id`
- [ ] Wybrany format (9:16 vs 16:9) i model
- [ ] Podany koszt w kredytach, jeśli 1080p / pro
- [ ] (Reels) po wygenerowaniu → `virality_predictor`
