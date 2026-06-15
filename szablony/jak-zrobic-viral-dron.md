# Przepis: VIRAL — „PERFECT VIDEOS / CREATED BY PHOTOS" + lot dronem

Format 9:16 (1080×1920). Układ jak w inspiracji `viral scena z drona`:
- **Góra:** nagłówek „PERFECT VIDEOS / CREATED BY PHOTOS" + **3 statyczne zdjęcia** (1ST / 2ND / 3RD PHOTO) + strzałka ↓
- **Dół (panel 9:16):** ⚠️ **TU MUSI BYĆ FILMIK Z LOTU DRONA** przez wnętrze (generowany per oferta).

Kompozycja: `wideo-remotion/src/ViralDron.tsx`.
- `PHOTOS` = 3 statyczne zdjęcia (`viral-1/2/3.png`).
- `DRON_SRC` = `staticFile("...mp4")` — **musi wskazywać na klip z lotu drona**. Dopóki go nie ma,
  panel pokazuje placeholder „PRZELOT DRONEM".

## Jak zrobić sam lot drona (WNIOSKI z prób — ważne!)
1. **TYLKO jedna klatka startowa** (`start_image`), **BEZ `end_image`**.
   - Dwie klatki (start+end) z różnych kątów → model je zlewa → **podwójny salon / zjawa / odbicie**. Nie używać.
2. **Model:**
   - **Veo 3** = najgładszy, profesjonalny ruch (22 kr, 1 zdjęcie, ~8 s). Auto-rozszerza prompt —
     trzeba napisać „INTERIOR ONLY, never approaches/looks through windows, does not go outside",
     inaczej **wylatuje oknem na zewnątrz**.
   - **Kling 3.0 PRO**, 1 zdjęcie = tańsza opcja (14 kr / 8 s), dobra płynność.
   - 4K (`mode:4k`) = maks. ostrość, ale drogo (5 s = 30 kr, 10 s = 60 kr).
3. **Prompt:** powolny, gładki, stały glide W ŚRODKU, w stronę schodów/żyrandola; „no shake, no wobble,
   no double image, no ghosting, stays indoors".
4. **NIE stosować mocnego vidstab** (optzoom przycina/psuje salon). Płynność lepiej dać wolnym ruchem.
5. **Wydłużenie/wygładzenie:** zwolnić w post — `ffmpeg setpts=PTS*1.2..1.6 -an`. 4K→1080 downscale = czyściej.
6. **CACHE:** każdą nową wersję klipu zapisuj pod **nową nazwą pliku** (`dron-final-v2.mp4`, `-v3`...)
   i renderuj do nowego pliku wyjściowego. Inaczej przeglądarka/odtwarzacz pokazują **starą wersję z cache**
   mimo podmiany zawartości (to nas długo myliło!).

## Kroki
1. 3 zdjęcia wnętrza → `public/viral-1/2/3.png` (statyczne miniatury).
2. Wybierz 1 najlepsze (z głębią) jako start lotu → upload do Higgsfield (media_upload → curl PUT → media_confirm).
3. `generate_video` (Veo 3 lub Kling PRO, 1 × start_image, prompt „interior only, smooth").
4. Pobierz pod nową nazwą → (opcjonalnie) zwolnij w post → ustaw `DRON_SRC` → render `ViralDron`.

Zob. `szablony/analiza-viral-dron.md` (analiza oryginału).
