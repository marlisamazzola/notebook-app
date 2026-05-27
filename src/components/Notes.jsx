import NewNote from "./NewNote"
import Button2 from "./Button2"

export default function Notes({ notes, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-text-main mb-4">Appunti</h2>
            <NewNote onAdd={onAdd} />
            {notes.length === 0 && (
                <p className="text-text-main my-4"> Non hai ancora annotato nulla in questo quaderno.</p>
            )}
            {notes.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-transparent">
                    {notes.map((note) => (
                        <li key={note.id} className="flex justify-between my-4">
                            <span>{note.text}</span>
                            <Button2 onClick={() => onDelete(note.id)}>Elimina</Button2>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}