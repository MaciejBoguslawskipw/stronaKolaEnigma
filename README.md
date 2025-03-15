# Koło Naukowe Enigma - Strona internetowa

Witaj w repozytorium strony internetowej Koła Naukowego Enigma! Poniżej znajdziesz instrukcję, jak uruchomić projekt lokalnie na swoim komputerze.

---

## **Technologie**
- **React.js** – biblioteka do budowy interfejsów użytkownika.
- **React Router** – zarządzanie routingiem w aplikacji.
- **CSS** – stylowanie strony.

---

## **Instrukcja uruchomienia projektu**

### **Krok 1: Sklonuj repozytorium**
Otwórz terminal i wykonaj następującą komendę, aby sklonować repozytorium na swój komputer:

```bash
git clone https://github.com/MaciejBoguslawskipw/stronaKolaEnigma.git
```

Przejdź do sklonowanego folderu:

```bash
cd enigma
```

---

### **Krok 2: Zainstaluj zależności**
Projekt korzysta z zależności wymienionych w pliku `package.json`. Aby je zainstalować, uruchom:

```bash
npm install
```

---

### **Krok 3: Uruchom projekt lokalnie**
Po zainstalowaniu zależności uruchom projekt za pomocą:

```bash
npm start
```

Aplikacja zostanie uruchomiona w trybie deweloperskim. Otwórz przeglądarkę i przejdź pod adres:

```
http://localhost:3000
```

---

### **Krok 4: Przeglądaj stronę**
Strona powinna być już dostępna w przeglądarce. Możesz przeglądać poszczególne zakładki:
- **Strona główna** – podstawowe informacje o kole.
- **Projekty** – lista projektów (wykonane, w trakcie, w planach).
- **Współprace** – informacje o współpracach koła.
- **Memy z IT** – zabawne memy związane z informatyką.
- **Kontakt** – dane kontaktowe.
- **Zarząd** – informacje o zarządzie i opiekunach koła.
- **Pobierz RAM** – żartobliwa zakładka.

---

### **Krok 5: Zatrzymaj projekt**
Aby zatrzymać działający projekt, wciśnij w terminalu kombinację klawiszy:

```bash
Ctrl + C
```

---

## **Struktura projektu**
Oto główne pliki i foldery w projekcie:

```
enigma-koło-naukowe/
├── public/              # Pliki statyczne (np. index.html)
├── src/                 # Główny folder z kodem źródłowym
│   ├── components/      # Komponenty React
│   ├── styles/          # Pliki CSS
│   ├── App.js           # Główny komponent aplikacji
│   └── index.js         # Punkt wejścia aplikacji
├── package.json         # Zależności i skrypty
└── README.md            # Ten plik
```

---

## **Dostępne skrypty**
W projekcie dostępne są następujące skrypty:

- **`npm start`** – uruchamia projekt w trybie deweloperskim.
- **`npm build`** – buduje projekt do produkcji.
- **`npm test`** – uruchamia testy (jeśli są zdefiniowane).
- **`npm eject`** – usuwa narzędzia Create React App (nieodwracalne).



## **Autor**
Projekt Tworzony przez Koło naukowe "Enigma"

---

**Miłego kodowania!** 🚀
