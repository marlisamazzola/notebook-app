import NewNotebook from "./components/NewNotebook";
import NoNotebookSelected from "./components/NoNotebookSelected";
import SelectedNotebook from "./components/SelectedNotebook";
import Sidebar from "./components/Sidebar";
import ConfirmModal from "./components/ConfirmModal";
import { useState } from "react";

function App() {

  const [isDark, setIsDark] = useState(false);
  const [selectedNotebookId, setSelectedNotebookId] = useState(undefined);
  const [notebooks, setNotebooks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [notebookToDelete, setNotebookToDelete] = useState(null);

  function handleRequestDeleteNotebook(id) {
    setNotebookToDelete(id);
  }

  function handleTheme() {
    setIsDark(prev => !prev);
    document.documentElement.classList.toggle('dark');
  }
  //funzione che viene chiamata quando l'utente aggiunge un nuovo appunto
  function handleAddNote(text) {
    setNotes((prevNotes) => {
      const noteId = Math.random();
      const newNote = {
        text: text,
        notebookId: selectedNotebookId,
        id: noteId
      };

      return [...prevNotes, newNote];
    });
  }

  //funzione che viene chiamata quando l'utente elimina un appunto
  function handleDeleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  }

  //funzione che viene chiamata quando l'utente seleziona un quaderno
  function handleSelectNotebook(id) {
    setSelectedNotebookId(id);
  }

  //funzione che viene chiamata quando l'utente clicca su "Aggungi quaderno" o "Crea nuovo quaderno"
  function handleStartAddNotebook() {
    setSelectedNotebookId(null);
  }
  //chiamata quando si clicca su "Elimina" in pagina di creazione del quaderno 
  // -> si torna alla pagina iniziale senza selezionare nessun quaderno
  function handleCancelAddNotebook() {
    setSelectedNotebookId(undefined);
  }

  //chiamata quando si clicca su "Salva" in pagina di creazione del quaderno 
  // -> si aggiunge il nuovo quaderno alla lista e si torna alla pagina iniziale senza selezionare nessun quaderno
  function handleAddNotebook(notebookData) {
    const newNotebook = {
      ...notebookData,
      id: Math.random(),
      date: new Date().toLocaleDateString('it-IT', {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    };
    setNotebooks(prevNotebooks => [...prevNotebooks, newNotebook]);
    setSelectedNotebookId(undefined);
  }

  //funzione per eliminare un quaderno
  function handleDeleteNotebook() {
    setNotebooks(prevNotebooks => prevNotebooks.filter(notebook => notebook.id !== notebookToDelete));
    setSelectedNotebookId(undefined);
    setNotebookToDelete(null);
  }

  //funzione per trovare il quaderno selezionato
  const selectedNotebook = notebooks.find(
    (notebook) => notebook.id === selectedNotebookId
  );

  let content = (
    <SelectedNotebook
      notebook={selectedNotebook}
      onDelete={() => handleRequestDeleteNotebook(selectedNotebookId)}
      onAddNote={handleAddNote}
      onDeleteNote={handleDeleteNote}
      notes={notes.filter(note => note.notebookId === selectedNotebookId)}
    />
  );

  if (selectedNotebookId === null) {
    content = (
      <NewNotebook onAdd={handleAddNotebook} onCancel={handleCancelAddNotebook} />
    );
  } else if (selectedNotebookId === undefined) {
    content = <NoNotebookSelected onStartAddNotebook={handleStartAddNotebook} />;
  }

  return (
    <>
      {notebookToDelete && (
        <ConfirmModal message="Vuoi eliminare questo quaderno?" onConfirm={handleDeleteNotebook} onCancel={() => setNotebookToDelete(null)} />
      )}
      <header>
        <button onClick={handleTheme}
          className="fixed top-0 right-0 md:right-4 md:top-4 md:text-4xl p-4 flex items-center justify-center h-10 w-10 text-text-main text-2xl bg-transparent">
          {isDark ? '☼' : '☾'}
        </button>
      </header>
      <main className="min-h-screen my-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <Sidebar
          onStartAddNotebook={handleStartAddNotebook}
          notebooks={notebooks}
          onSelectNotebook={handleSelectNotebook}
          selectedNotebookId={selectedNotebookId}
          onDeleteNotebook={handleRequestDeleteNotebook}
        />
        <div className="w-full flex justify-center md:justify-start">
          {content}
        </div>
      </main>
    </>
  );
}

export default App;
