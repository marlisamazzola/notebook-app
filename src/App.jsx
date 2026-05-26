import NewNotebook from "./components/NewNotebook";
import NoNotebookSelected from "./components/NoNotebookSelected";
import SelectedNotebook from "./components/SelectedNotebook";
import Sidebar from "./components/Sidebar";
import Cover from "./components/Cover";
import { useState } from "react";

function App() {

  const [open, setOpen]=useState(false); 
  const [isFolding, setIsFolding]=useState(false);

  function handleOpen() {
    setIsFolding(true);
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }

  const [notebooksState, setNotebooksState] = useState({
    selectedNotebookId: undefined, //undefined indica che non si sta aggiungendo un quaderno e non ci sono progetti selezionati
    notebooks: [], //array che conterrà tutti i progetti creati, inizialmente vuoto
    notes: [], //array che conterrà tutte le note, inizialmente vuoto
  });

  //funzione che viene chiamata quando l'utente aggiunge un nuovo appunto
  function handleAddNote(text) {
    setNotebooksState((prevState) => {
      const noteId = Math.random();
      const newNote = {
        text: text,
        notebookId: prevState.selectedNotebookId,
        id: noteId
      };

      return {
        ...prevState, //non si perde stato precedente con tutti i progetti già creati
        notes: [...prevState.notes, newNote],
      };
    });
  }

  //funzione che viene chiamata quando l'utente elimina un note
  function handleDeleteNote(id) {
    setNotebooksState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.filter((note) => note.id !== id), //elimina il note con l'id specificato
      };
    });
  }

  //funzione che viene chiamata quando l'utente seleziona un quaderno
  function handleSelectNotebook(id) {
    setNotebooksState((prevState) => {
      return {
        ...prevState,
        selectedNotebookId: id, //si seleziona il quaderno con l'id specificato
      }
    });
  }

  //funzione che viene chiamata quando l'utente clicca su "Add Notebook" o "Create new notebook"
  function handleStartAddNotebook() {
    setNotebooksState((prevState) => {
      return {
        ...prevState,
        selectedNotebookId: null, //null indica che si sta aggiungendo un quaderno
      }
    });
  }

  //chiamata quando si clicca su "Cancel" in pagina di creazione del quaderno 
  // -> si torna alla pagina iniziale senza selezionare nessun quaderno
  function handleCancelAddNotebook() {
    setNotebooksState((prevState) => {
      return {
        ...prevState,
        selectedNotebookId: undefined, //undefined indica che non si sta aggiungendo un quaderno
      };
    });
  }

  //chiamata quando si clicca su "Save" in pagina di creazione del quaderno 
  // -> si aggiunge il nuovo quaderno alla lista e si torna alla pagina iniziale senza selezionare nessun quaderno
  function handleAddNotebook(notebookData) {
    setNotebooksState((prevState) => {
      const newNotebook = {
        ...notebookData,
        id: Math.random(),
        date: new Date().toLocaleDateString('en-EN', {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      };

      return {
        ...prevState,
        selectedNotebookId: undefined,
        notebooks: [...prevState.notebooks, newNotebook],
      };
    });
  }

  //funzione per eliminare un quaderno
  function handleDeleteNotebook() {
    setNotebooksState((prevState) => {
      return {
        ...prevState,
        selectedNotebookId: undefined,
        notebooks: prevState.notebooks.filter(
          (notebook) => notebook.id !== prevState.selectedNotebookId //elimina il quaderno con l'id specificato
        ),
      };
    });
  }

  //funzione per trovare il quaderno selezionato
  const selectedNotebook = notebooksState.notebooks.find(
    (notebook) => notebook.id === notebooksState.selectedNotebookId
  );

  //contiene il quaderno selezionato
  let content = (
    <SelectedNotebook
      notebook={selectedNotebook} //quaderno selezionato
      onDelete={handleDeleteNotebook} //funzione per eliminare il quaderno
      onAddNote={handleAddNote} //funzione per aggiungere una note
      onDeleteNote={handleDeleteNote} //funzione per eliminare una note
      notes={notebooksState.notes.filter(note => note.notebookId === notebooksState.selectedNotebookId)} //notes del quaderno selezionato
    />
  );

  if (notebooksState.selectedNotebookId === null) {
    content = (
      <NewNotebook onAdd={handleAddNotebook} onCancel={handleCancelAddNotebook} />
    );
  } else if (notebooksState.selectedNotebookId === undefined) {
    content = <NoNotebookSelected onStartAddNotebook={handleStartAddNotebook} />;
  }

   if (!open) {
    return (
      <Cover onOpen={handleOpen} isFolding={isFolding} />
    );
  }

  return (
    <main className="min-h-screen my-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
      <Sidebar
        onStartAddNotebook={handleStartAddNotebook}
        notebooks={notebooksState.notebooks}
        onSelectNotebook={handleSelectNotebook}
        selectedNotebookId={notebooksState.selectedNotebookId}
      />
      <div className="w-full flex justify-center md:justify-start">
        {content}
      </div>
    </main>
  );
}

export default App;
