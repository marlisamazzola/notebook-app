# 📓 Notebook App

Un'applicazione web per organizzare appunti in quaderni, realizzata come esercizio frontend con React.

## Funzionalità

- **Crea quaderni** con titolo, data e descrizione
- **Aggiungi note** all'interno di ogni quaderno
- **Elimina note** singolarmente
- **Elimina quaderni** insieme a tutte le note associate
- **Validazione form** — modal di errore se i campi sono vuoti
- **Sidebar** con lista di tutti i quaderni e navigazione rapida

## Tecnologie utilizzate

- **React 18** — componenti funzionali, hooks (`useState`, `useRef`, `useImperativeHandle`)
- **Vite** — bundler e dev server
- **Tailwind CSS** — stile utility-first
- **createPortal** — rendering del modal fuori dall'albero DOM principale

## Struttura del progetto

```
/
├── index.html
├── src/
│   ├── App.jsx               # Componente root, gestione stato globale
│   ├── main.jsx              # Entry point
│   ├── index.css             # Stili globali e import Tailwind
│   ├── assets/
│   │   └── notebook.png
│   ├── public/
│   │   └── dotted-background.png
│   └── components/
│       ├── Sidebar.jsx            # Lista quaderni + pulsante aggiungi
│       ├── NoNotebookSelected.jsx # Schermata iniziale
│       ├── NewNotebook.jsx        # Form creazione quaderno
│       ├── SelectedNotebook.jsx   # Vista quaderno aperto
│       ├── Notes.jsx              # Lista note del quaderno
│       ├── NewNote.jsx            # Input per aggiungere una nota
│       ├── ErrorModal.jsx         # Modal di errore (tramite portal)
│       ├── Input.jsx              # Componente input riutilizzabile
│       └── Button.jsx             # Componente bottone riutilizzabile
```

## Scelte tecniche

- Lo **stato globale** (quaderni, note, quaderno selezionato) è gestito interamente in `App.jsx` e passato ai figli tramite props
- `selectedNotebookId` usa tre valori distinti: `undefined` (nessun quaderno selezionato), `null` (form di creazione aperto), `id` (quaderno selezionato)
- Il **modal di errore** usa `createPortal` per renderizzare fuori dal flusso normale del DOM, e `useImperativeHandle` per esporre il metodo `open()` al componente padre
- I ref degli input in `NewNotebook` evitano la gestione dello stato per campi non controllati
- Le note sono filtrate per `notebookId` direttamente nel render, senza stato derivato separato

## Come avviarlo in locale

```bash
# Clona il repository
git clone https://github.com/marlisamazzola/notebook-app.git
cd notebook-app

# Installa le dipendenze
npm install

# Avvia il dev server
npm run dev
```

Apri il browser su `http://localhost:5173`.

## Autrice

Marlisa Mazzola — esercizio di frontend development con React e Tailwind CSS
