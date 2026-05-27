// Pagina per creare un nuovo progetto
// Mostrato quando l'utente clicca su "Add Notebook" o "Create new notebook"

import { useState } from "react";
import Input from "./Input"
import Button1 from "./Button1";
import Button2 from "./Button2";

export default function NewNotebook({ onAdd, onCancel }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showError, setShowError] = useState(false)

    function handleSave() {

        if (title.trim() === '' || description.trim() === '') {
            setShowError(true);
            return;
        }

        onAdd({
            title: title,
            description: description,
        })
    };

    return (
        <>
            <div className="w-[calc(100%-2rem)] max-w-2xl mt-16 mx-auto md:mx-0">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <Button2 onClick={onCancel}>Annulla</Button2>
                    </li>
                    <li>
                        <Button1 onClick={handleSave}>Salva</Button1>
                    </li>
                </menu>
                <div>
                    <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} label="Titolo" />
                    <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} label="Descrizione" textArea={true} />
                    {showError && (
                        <p className="text-error text-sm mb-4">Ooops... forse hai dimenticato di inserire un titolo o una descrizione!</p>
                    )}
                </div>
            </div>
        </>)
}