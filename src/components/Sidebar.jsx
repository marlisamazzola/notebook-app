import Button from './Button.jsx';

export default function NotebooksSidebar({
  onStartAddNotebook,
  notebooks,
  onSelectNotebook,
  selectedNotebookId,
}) {
  return (
    <aside className="w-full md:w-72 px-8 py-16 bg-stone-700 text-stone-50 md:rounded-r-xl text-center md:text-left min-h-75 md:min-h-screen flex flex-col">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-[#ec9a7d]">
        Your Notebooks
      </h2>
      <div>
        <Button onClick={onStartAddNotebook}>+ Add Notebook</Button>
      </div>
      <ul className="mt-8 max-h-[60vh] md:max-h-none overflow-y-auto custom-scrollbar flex-1">
        {notebooks.map((notebook) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 transition-colors";

          if (notebook.id === selectedNotebookId) {
            cssClasses += ' bg-stone-800 text-stone-200';
          } else {
            cssClasses += ' text-stone-400';
          }

          return (
            <li key={notebook.id} className="flex">
              <button
                className={`${cssClasses} truncate`} // truncate evita testi troppo lunghi
                onClick={() => onSelectNotebook(notebook.id)}
              >
                {notebook.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}