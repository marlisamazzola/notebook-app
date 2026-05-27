// Componente mostrato quando non è selezionato nessun progetto
// Mostra un messaggio e un pulsante per creare un nuovo progetto

import Button1 from './Button1.jsx';
import notebook from '../assets/notebook.png';

export default function NoNotebookSelected({ onStartAddNotebook }) {
  return (
    <div className="mt-24 text-center w-[90%] md:w-2/3 mx-auto">
      <img src={notebook} alt="Quaderno" className="w-25 h-25 mx-auto mb-4" />
      <h2 className="text-xl font-bold text-text-main my-4">
        Nessun quaderno selezionato
      </h2>
      <p className="text-text-main mb-4">
        Seleziona un quaderno o creane uno nuovo per iniziare a prendere appunti!
      </p> 
      <p className="mt-8">
        <Button1 onClick={onStartAddNotebook}>Crea un nuovo quaderno</Button1>
      </p>
    </div>
  );
}