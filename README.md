# 📓 Notebook App

Un'applicazione web per organizzare appunti in quaderni digitali.

## Funzionalità

- Crea quaderni con titolo e descrizione
- Aggiungi e rimuovi note all'interno di ogni quaderno
- Elimina quaderni con richiesta di conferma
- Eliminazione rapida dalla sidebar con il tasto ✕
- Validazione form con messaggio di errore inline
- Modalità chiara e scura
- Layout responsive

## Tecnologie

- **React 18** — componenti funzionali, `useState`
- **Vite** — bundler e dev server
- **Tailwind CSS v4** — tema personalizzato con variabili CSS via `@theme`

## Struttura

```
src/
├── App.jsx                    # Stato globale e logica principale
├── main.jsx                   # Entry point
├── index.css                  # Tema e variabili CSS
└── components/
    ├── Sidebar.jsx            # Lista quaderni con navigazione e eliminazione rapida
    ├── NoNotebookSelected.jsx # Schermata iniziale
    ├── NewNotebook.jsx        # Form creazione quaderno
    ├── SelectedNotebook.jsx   # Vista quaderno selezionato
    ├── Notes.jsx              # Lista appunti
    ├── NewNote.jsx            # Aggiunta appunto
    ├── ConfirmModal.jsx       # Modale di conferma eliminazione
    ├── Input.jsx              # Input riutilizzabile
    ├── Button1.jsx            # Bottone primario
    └── Button2.jsx            # Bottone secondario
```

## Scelte tecniche

- Lo stato (quaderni, note, quaderno selezionato) è gestito in `App.jsx` con `useState` separati e passato ai componenti tramite props
- `selectedNotebookId` usa tre valori: `undefined` (nessuna selezione), `null` (form aperto), `id` (quaderno aperto)
- La modalità scura si attiva aggiungendo la classe `dark` a `<html>` — i colori cambiano tramite le variabili CSS definite in `index.css`

## Avvio in locale

```bash
git clone https://github.com/marlisamazzola/notebook-app.git
cd notebook-app
npm install
npm run dev
```

Apri `http://localhost:5173`.
