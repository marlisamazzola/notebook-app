import Button1 from "./Button1";

export default function NotebooksSidebar({ onStartAddNotebook, notebooks, onSelectNotebook, selectedNotebookId, onDeleteNotebook }) {
  return (
    <aside className="w-full md:w-72 px-8 py-16 bg-bg-dark md:rounded-r-xl text-center md:text-left min-h-75 md:min-h-screen flex flex-col">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-title-sidebar">
        I tuoi quaderni
      </h2>
      <div>
        <Button1 onClick={onStartAddNotebook}>+ Aggiungi</Button1>
      </div>
      <ul className="mt-8 max-h-[60vh] md:max-h-none overflow-y-auto custom-scrollbar flex-1">
        {notebooks.map((notebook) => {
          let cssClasses = "w-full text-left px-3 py-2 rounded-md my-1 transition-colors text-xs md:text-base font-bold ";

          if (notebook.id === selectedNotebookId) {
            cssClasses += "text-title-sidebar bg-teal-500/20";
          } else {
            cssClasses += "text-title-sidebar hover:bg-white/10";
          }

          return (
            <div key={notebook.id} className="flex items-center justify-between">
              <button className={cssClasses} onClick={() => onSelectNotebook(notebook.id)}>
                {notebook.title}
              </button>
              <button onClick={() => onDeleteNotebook(notebook.id)} className="text-title-sidebar hover:text-error ml-2">
                ✕
              </button>
            </div>
          );
        })}
      </ul>
    </aside>
  );
}
