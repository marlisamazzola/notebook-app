import { useState } from "react";

export default function NewNote({ onAdd }) {
    const [enteredNote, setEnteredNote] = useState('');

    function handleChange(event) {
        setEnteredNote(event.target.value); //salvo il valore dell'input
    }

    //funzione per aggiungere la nuova note
    function handleClick() {
        if (enteredNote.trim() === '') {
            return;
        }
        onAdd(enteredNote);
        setEnteredNote('');
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredNote}
            />
            <button
                className="text-stone-700 hover:text-[#ec9a7d] font-bold"
                onClick={handleClick}
            >Add Note</button>
        </div>
    )
}