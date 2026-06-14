# Workflow: link do ogłoszenia → gotowy Reels (min. kredytów)

Domyślny format: **9:16 (Reels/TikTok), 1080×1920**. Cel: jak najmniej kredytów Higgsfield.

## Warstwy produkcji wg kosztu
| Warstwa | Narzędzie | Koszt |
|---|---|---|
| Ruch kamery, przejścia L/P, „dron", najazdy, napisy, muzyka, montaż | **Remotion** (lokalnie) | 0 |
| Meble / staging / odświeżenie / wizualizacje | **prompt → ChatGPT** (user generuje za darmo) | 0 |
| Prawdziwy AI przelot / parallax, którego Remotion nie udźwignie | **Higgsfield** | kredyty (wyjątkowo) |

**Zasada:** najpierw próbuję Remotion + ChatGPT. Higgsfield tylko gdy efekt jest niemożliwy
do podrobienia i naprawdę potrzebny. Przy każdym użyciu Higgsfield podaję koszt przed startem.

## Kroki
1. **Link** od użytkownika (Otodom / OLX / inne).
2. **Scrap** (WebFetch): zdjęcia (URL), metraż, cena, pokoje, piętro, opis, lokalizacja.
   - Jeśli portal blokuje scrap → proszę o wklejenie zdjęć / danych ręcznie.
   - Zapis danych do `nieruchomosci/<oferta>/oferta.md`, zdjęcia do `zrodlo/`.
3. **Sam proponuję plan produkcji** (scenorys) — dobieram ujęcia, ruchy, kolejność, napisy:
   - które zdjęcia, jaki ruch (najazd / przesuw L / przesuw P / fade / parallax)
   - gdzie staging (i gotowy prompt do ChatGPT)
   - hook 0–2 s, atuty jako napisy, CTA na końcu, sugestia muzyki
4. **Akceptacja** użytkownika (zmiany do scenorysu).
5. **Staging (jeśli trzeba):** podaję prompty → user generuje w ChatGPT → wrzuca do `zdjecia/`.
6. **Montaż w Remotion** → render `wideo/oferta-reels-9x16.mp4` (0 kredytów).
7. (Opcjonalnie) `virality_predictor` na gotowym pliku przed publikacją.

## Efekty „drona" za darmo (Remotion — Ken Burns)
- **Przesuw w prawo:** powolne translate X zdjęcia + lekki zoom-in.
- **Przesuw w lewo:** odwrotnie.
- **Najazd reveal:** scale 1.0 → 1.15 przez 3–4 s.
- **Parallax light:** 2 warstwy (tło + pierwszy plan) z różną prędkością.
- Wymaga zdjęć w **wysokiej rozdzielczości** (im większe, tym płynniejszy „dron").

## Scenorys — format (wypełniam w punkcie 3)
```
SHOT 1 | salon (zdj_01) | najazd reveal 1.0→1.15 | napis: "{metraż} m² · {dzielnica}" | 0–3s
SHOT 2 | kuchnia (zdj_03) | przesuw w prawo | STAGING: dodać stół jadalniany [prompt ↓] | 3–6s
SHOT 3 | sypialnia (zdj_05) | przesuw w lewo + fade | napis: "✓ {atut}" | 6–9s
OUTRO  | najlepsze zdj | zoom-out | CTA: "Napisz DM «INFO»" + {telefon} | 9–12s
Muzyka: spokojny lo-fi / elegancki | Tempo cięć: 2–3 s
```
