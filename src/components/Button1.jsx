export default function Button2({ children, ...props }) {
  return (
    <button 
      className="px-4 py-2 text-xs md:text-base rounded-md font-bold active:scale-95 shadow-sm border bg-btn-bg border-btn-bg text-btn-text hover:bg-btn-bg-hover hover:border-btn-bg-hover hover:text-btn-text-hover" 
      {...props}
    >
      {children}
    </button>
  );
}
