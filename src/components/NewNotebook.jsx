// Pagina per creare un nuovo progetto
// Mostrato quando l'utente clicca su "Add Notebook" o "Create new notebook"

import { useRef } from "react";

import Input from "./Input"
import Modal from "./ErrorModal";

export default function NewNotebook({ onAdd, onCancel }) {
    const modal = useRef(); // ref per il modal, in questo modo posso aprirlo quando l'utente non inserisce tutti i campi

    // tre ref per i tre input del form, in questo modo posso accedere al valore degli input senza dover gestire lo stato
    const title = useRef();
    const description = useRef();

    // funzione che viene chiamata quando l'utente clicca su save, in questo modo 
    // posso accedere ai valori degli input e salvarli in un nuovo progetto
    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '') {
            modal.current.open(); // apro il modal se l'utente non inserisce tutti i campi
            return;
        } //trim() elimina gli spazi iniziali e finali


        onAdd({
            title: enteredTitle,
            description: enteredDescription,
        }) // chiamo la funzione onAdd passata come prop da App, passando un oggetto con i dati del nuovo progetto
    };

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
                <p className="text-stone-600 mb-4">Oooop... looks like you missed some fields!</p>
                <p className="text-stone-600 mb-4">Please make sure to fill in all required fields 🖊️</p>
            </Modal>
            <div className="w-[calc(100%-2rem)] max-w-2xl mt-16 mx-auto md:mx-0">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-600 font-bold hover:text-[#e07753]" onClick={onCancel}>Cancel</button>
                    </li>
                    <li>
                        <button
                            className="bg-[#f2b099] text-stone-800 font-bold hover:bg-[#e07753] hover:text-stone-50 px-6 py-2 rounded-md active:scale-95"
                            onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input type="text" ref={description} label="Description" textArea={true} />
                </div>
            </div>
        </>)
}