// Componente mostrato quando non è selezionato nessun progetto
// Mostra un messaggio e un pulsante per creare un nuovo progetto

import noNotebookImage from '../assets/notebook.png';
import Button from './Button.jsx';

export default function NoNotebookSelected({ onStartAddNotebook }) {
  return (
    <div className="mt-24 text-center w-[90%] md:w-2/3 mx-auto">
      <img
        src={noNotebookImage}
        alt="An empty note list"
        className="w-20 h-20 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-600 my-4">
        No Notebook Selected
      </h2>
      <p className="text-stone-500 mb-4">
        Select a notebook or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddNotebook}>Create new notebook</Button>
      </p>
    </div>
  );
}