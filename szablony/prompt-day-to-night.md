# Szablon: prompt do ChatGPT — dzień → noc (relight wnętrza)

Cel: z jednego zdjęcia wnętrza w dzień zrobić **to samo wnętrze nocą** (do filmu DAY VS NIGHT).
Generujesz w ChatGPT za darmo, potem wrzucasz wynik do `wideo-remotion/public/`.

## Prompt (wklej do ChatGPT razem ze zdjęciem dnia)
```
Convert this daytime interior photo into the SAME room at night / blue hour.
Keep the EXACT same composition, furniture, layout, camera angle, walls, windows
and architecture — do not add, remove or move any objects.
Turn ON warm interior lighting: lamps, pendant lights, under-cabinet and accent glow.
Darken the windows to show a deep blue dusk / night sky outside.
Add soft warm ambient shadows, gentle reflections and a cozy cinematic evening mood.
Photorealistic, real-estate photography quality, same resolution and framing.
```

## Zasady, żeby przejście było idealne
- **Ten sam kadr** — nie kadrować inaczej; przejście dzień→noc działa tylko, gdy oba zdjęcia
  są w identycznym ujęciu.
- Jeśli ChatGPT przesunie meble/kąt — poproś: „keep identical framing and all objects in place".
- Zapisz plik jako `night-<nazwa>.jpg` obok dziennego `<nazwa>.jpg` w `public/`.

## Nazewnictwo (żeby Claude od razu podłączył)
- Dzień: `public/dvn-day.jpg`
- Noc:   `public/dvn-night.jpg`
(albo podaj inne nazwy — podmienię w kompozycji `DayVsNight`)
