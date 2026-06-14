# Szablon: wirtualny staging / poprawa zdjęć

Cel: puste/zaniedbane wnętrze → atrakcyjne, umeblowane, dobrze oświetlone.

## Higgsfield (generuję sam)
- `generate_image` — meblowanie wnętrza wg stylu (start_image = puste pomieszczenie)
- `remove_background` — wycięcie tła np. do grafik ofertowych
- `upscale_image` — poprawa rozdzielczości słabych zdjęć od agenta
- `outpaint_image` — poszerzenie kadru (ciasne ujęcia)

## Prompt do meblowania (PL→EN, do Higgsfield lub ChatGPT/DALL·E)
```
Furnish this empty {pomieszczenie} in a {styl} style: {meble}, warm natural lighting,
realistic shadows, keep the existing walls/windows/floor unchanged, photorealistic,
interior design magazine quality.
```

### Style do wyboru (podmień {styl} + {meble})
| Styl | Meble / klimat |
|---|---|
| skandynawski | jasne drewno, biel, zieleń, minimalizm, przytulność |
| nowoczesny / loft | beton, czerń, stal, duża sofa, industrialne lampy |
| klasyczny / glamour | ciepłe beże, złote akcenty, miękkie tkaniny |
| boho | naturalne materiały, rośliny, ciepłe barwy, makramy |

## Zasada uczciwości
Staging to wizualizacja potencjału — **nie zmieniam metrażu, układu, okien ani widoku**.
W opisie oferty zaznaczam „wizualizacja / aranżacja poglądowa", gdy zdjęcie jest generowane.

## Wariant ChatGPT (gdy robisz sam)
Generuję gotowy prompt EN i zapisuję go w `nieruchomosci/<oferta>/teksty/` — wklejasz do DALL·E,
gotowe zdjęcie wrzucasz do `zdjecia/`.
