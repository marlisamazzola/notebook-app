import Notes from "./Notes";
import Button2 from "./Button2";

export default function SelectedNotebook({ notebook, onDelete, onAddNote, onDeleteNote, notes }) {

  return (
    <div
      className="w-[calc(100%-2rem)] max-w-2xl mt-16 mx-auto md:mx-0 relative bg-bg-main p-8 shadow-lg border-l-8 border-accent"
      style={{
        backgroundImage: 'radial-gradient(circle, var(--color-dotted) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <header className="pb-4 mb-4 border-b-2 border-text-muted text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-text-muted">
            {notebook?.title}
          </h1>
          <Button2 onClick={onDelete}>Elimina</Button2>
        </div>
        <p className="mb-4 text-text-muted">{notebook?.date}</p>
        <p className="text-text-muted whitespace-pre-wrap">
          {notebook?.description}
        </p>
      </header>
      <Notes onAdd={onAddNote} onDelete={onDeleteNote} notes={notes} />
    </div>
  );
}