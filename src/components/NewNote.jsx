import { useState } from "react";
import Button1 from "./Button1";

export default function NewNote({ onAdd }) {
    const [enteredNote, setEnteredNote] = useState('');

    function handleNote(event) {
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
                type="text" className="w-64 px-2 py-1 rounded-sm bg-surface"
                onChange={handleNote}
                value={enteredNote}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleClick();
                }}
            />
            <Button1 onClick={handleClick}>Aggiungi</Button1>
        </div>
    )
}