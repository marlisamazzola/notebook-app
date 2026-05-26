export default function Cover({ onOpen, isFolding }) {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-200 p-4 overflow-hidden">
      
      <div className={`w-100 h-150 bg-[#f2b099] rounded-r-2xl shadow-2xl border-l-30 border-stone-700 
        flex flex-col justify-between p-6 text-white transition-all duration-10000 ease-in-out transform
        ${isFolding ? '-translate-x-full rotate-y-180 opacity-0 scale-95' : 'translate-x-0 rotate-0 opacity-100'}`}
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        
        {/* Etichetta stile quaderno vintage */}
        <div className="bg-stone-50 text-stone-800 p-4 rounded shadow-inner text-center mt-8 border border-stone-300">
          <h1 className="font-serif text-2xl font-bold tracking-wide">Notebook App</h1>
          <p className="text-xs text-stone-500 mt-1 uppercase tracking-widest">M. Mazzola</p>
        </div>

        {/* Pulsante per "Aprire" il quaderno */}
        <button 
          onClick={onOpen}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 text-center tracking-wide font-sans cursor-pointer"
        >
          Apri Copertina →
        </button>
      </div>

    </div>
  );
}
