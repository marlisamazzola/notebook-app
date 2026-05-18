import { useImperativeHandle, useRef } from 'react'; //permette di esporre metodi e proprietà di un componente figlio al componente padre
import { createPortal } from 'react-dom'; //permette di renderizzare un componente in un nodo del DOM diverso da quello del componente padre

import Button from './Button';

// componente per mostrare un messaggio di errore
// usato per mostrare un messaggio di errore quando l'utente non inserisce tutti i campi
export default function Modal({ children, buttonCaption, ref }) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();// logica per aprire il modal
            }
        }
    });

    return createPortal(
    <dialog 
        ref={dialog} 
        className="max-w-md backdrop:bg-stone-900/90 p-6 rounded-md shadow-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-0"
    >
        {children}
        <form method="dialog" className="mt-4 flex justify-end ">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog >,
    document.getElementById('modal-root')
);
};

