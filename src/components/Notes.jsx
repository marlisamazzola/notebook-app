import NewNote from "./NewNote"

export default function Notes({ notes, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Notes</h2>
            <NewNote onAdd={onAdd} />
            {notes.length === 0 && (
                <p className="text-stone-800 my-4"> This notebook does not have any note yet.</p>
            )}
            {notes.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {notes.map((note) => (
                        <li key={note.id} className="flex justify-between my-4">
                            <span>{note.text}</span>
                            <button onClick={() => onDelete(note.id)} className="text-stone-700 hover:text-[#ec9a7d] font-bold">Clear</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}