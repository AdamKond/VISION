# Analiza stylu DAY VS NIGHT (z inspiracji)

Bazuje na klatkowej analizie `inspirations/DAY VS NIGHT 1.mp4` i `2.mp4`.
(Uwaga: ffmpeg z Remotion ma wyłączone filtry `select/signalstats/showinfo` — analiza ręczna z klatek.)

## Parametry
- 720×1280 (9:16), 30 fps. DVN1 = 7,73 s. DVN2 = 10,56 s.

## DVN1 — szybki montaż dzień→noc
- **Cięcia co ~0,8–1,0 s**, ~8 różnych ujęć w ~7,7 s.
- W każdym ujęciu **powolny stały najazd do środka (push-in)**, prędkość ~liniowa, bez bocznego dryfu.
- **Dzień→noc raz, w ~45% długości** (~3,0–3,5 s). Pierwsza połowa dzień, druga noc.
- Napis szeryfowy „Day / vs / Night" **na środku**; „Day"→„Night" w momencie zmiany pory.
- Przejścia między ujęciami: szybkie (twarde cięcie lub mikro-przenikanie ~0,1–0,2 s).

## DVN2 — wolny, dronowy
- 1–2 długie ujęcia z drona, powolny odjazd/uniesienie (pull-back) odsłaniający budynek.
- „The Day VS" → „The Night" u góry, przejście dzień→noc ~w połowie.

## Recepta do odtworzenia (nasz pipeline, 0 dodatkowych kredytów)
- Klipy push-in z Higgsfield (Kling, start_image=zdjęcie), po ~3 s każdy.
- W Remotion montaż: **DISP ≈ 33 klatki (~1,1 s) na ujęcie**, XF ≈ 7 (mikro-przenikanie),
  kolejność 4× dzień → 4× noc, napis na środku, zmiana Day→Night na granicy aktów.
- Całość ~7–8 s, format 1080×1920.
