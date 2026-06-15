# Analiza stylu METAMORFOZA (z inspiracji)

Z klatkowej analizy 5 filmików `inspirations/*metamorf*`. Wszystkie 720×1280 (9:16), 30 fps.

## Czym jest „metamorfoza"
Transformacja **BEFORE → AFTER tej samej nieruchomości**, ten sam kadr: stan zaniedbany/pusty
zmienia się w wyremontowany/umeblowany/zabudowany. Sedno = efekt „wow" z kontrastu przed/po.

## Warianty (typy)
- **Renowacja domu**: stary dom → (etapy: rozbiórka, nowy dach) → gotowy, oświetlony dom o zmierzchu.
- **Pusta działka → dom** (ujęcie z drona, z góry).
- **Podwórko/ogród → basen + landscaping** (często finał nocą, podświetlenie, rośliny).
- **Wnętrze puste/stare → umeblowane**.

## Parametry i rytm
- Długość: ~10–11 s (renowacje), 7 s (wnętrze), do 18 s (działka).
- **Hook tekstowy po polsku na starcie**: „Pomysł na stary domek na wsi", „Ai ma na to plan".
- Powolny reveal; przy renowacji widać **pośrednie etapy budowy** → to sugeruje albo morph AI
  start→end, albo sekwencję 3–4 wygenerowanych etapów sklejonych.
- Finał zwykle o złotej godzinie / zmierzchu, z oświetleniem i zielenią. Czasem fade do czerni.
- Widoczny watermark twórcy („My Plants") — to nie element naszego stylu.

## Jak odtworzyć (nasz pipeline)
1. **BEFORE**: zdjęcie stanu obecnego (stary dom / pusta działka / puste wnętrze).
2. **AFTER**: w ChatGPT wygeneruj wersję „po" w identycznym kadrze (wyremontowane / umeblowane /
   zabudowane; finał o zmierzchu z oświetleniem). Prompt: „renovate / furnish this, keep exact
   same camera angle and framing, photorealistic, golden hour, landscaped".
3. **MORPH**: Higgsfield `kling3_0` (pro), `start_image=BEFORE`, `end_image=AFTER`, 5 s, 9:16 —
   model płynnie przejdzie z przed→po (jak nasz pierwszy test DAY VS NIGHT). ~7–9 kr/klip.
   (Dla efektu „etapów budowy" można wygenerować 2–3 pośrednie obrazy i zrobić łańcuch.)
4. **MONTAŻ** (Remotion): hook tekstowy na starcie, powolny reveal, ewentualnie napis
   „PRZED / PO", finał przytrzymany. Stabilizacja vidstab jak w DAY VS NIGHT.

## Zob. też
- `szablony/jak-zrobic-day-vs-night.md` — bliźniaczy pipeline (start→end image + montaż).
- `szablony/prompt-staging.md` — prompty do meblowania/renowacji w ChatGPT.
