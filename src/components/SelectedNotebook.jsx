import Notes from "./Notes";

export default function SelectedNotebook({ notebook, onDelete, onAddNote, onDeleteNote, notes }) {

  return (
      <div className="w-[calc(100%-2rem)] max-w-2xl mt-16 mx-auto md:mx-0 relative bg-stone-50 p-8 shadow-lg border-l-8 border-[#f2b099]">
      <header className="pb-4 mb-4 border-b-2 border-stone-300 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-stone-600">
            {notebook.title}
          </h1>
          <button
            className="bg-[#f2b099] text-stone-800 font-bold hover:bg-[#e07753] hover:text-stone-50 px-6 py-2 rounded-md active:scale-95"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{notebook.date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {notebook.description}
        </p>
      </header>
      <Notes onAdd={onAddNote} onDelete={onDeleteNote} notes={notes} />
    </div>
  );
}