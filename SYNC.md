# Synchronizacja: Windows ↔ MacBook (GitHub)

Cel: ten sam projekt VISION na obu komputerach. Repo jest **prywatne** (są dane klientów!).
Narzędzie: **GitHub Desktop** (apka z okienkami — bez terminala).

---

## 🪟 KROK 1 — Windows (raz, teraz)
Repozytorium git jest już gotowe lokalnie (zrobione przez Claude). Pozostało wysłać je na GitHub:

1. Pobierz i zainstaluj **GitHub Desktop**: https://desktop.github.com
2. Zaloguj się swoim kontem GitHub (lub załóż darmowe na https://github.com).
3. **File → Add Local Repository** → wskaż folder `C:\Users\Absolus\Desktop\VISION`.
4. Kliknij **Publish repository**.
   - ✅ **ZAZNACZ „Keep this code private"** (WAŻNE — są maile/telefony klientów!)
   - Nazwa: `VISION` → **Publish**.

Gotowe — projekt jest na GitHubie (prywatnie).

---

## 🍎 KROK 2 — MacBook (raz)
1. Zainstaluj **Claude Code** na Macu: https://claude.com/claude-code
2. Zainstaluj **GitHub Desktop**: https://desktop.github.com → zaloguj tym samym kontem.
3. **File → Clone Repository** → wybierz `VISION` → wybierz, gdzie ma być (np. `~/VISION`).
4. (Do filmów) zainstaluj Node: https://nodejs.org (wersja LTS) — Remotion go potrzebuje.
5. Otwórz folder VISION w Claude Code — przeczytam `README.md` i jestem w temacie.

---

## 🔄 CODZIENNA PRACA (na obu maszynach)
- **Zanim zaczniesz** na danym komputerze → w GitHub Desktop kliknij **Fetch / Pull origin**
  (pobiera zmiany z drugiej maszyny).
- **Gdy skończysz** → **Commit** (krótki opis) + **Push origin** (wysyła zmiany).

> Złota zasada: **Pull na starcie, Push na koniec.** Wtedy nigdy nie pracujesz na starej wersji.

---

## Uwagi techniczne
- `node_modules/` (Remotion) **nie** jest w repo — na każdej maszynie raz uruchom `npm install`
  w folderze Remotiona (zajmę się tym, gdy budujemy pierwsze wideo).
- Duże pliki (filmy, zdjęcia) idą przez **Git LFS** (skonfigurowane). Darmowy limit GitHub to
  ~1 GB. Jak się zapełni — wyczyścimy stare rendery albo przejdziemy na większy plan.
- Gdybyś pracował na obu naraz i wyszedł „konflikt" — daj znać, pomogę go rozwiązać.
