export default function Button({children, ...props}){
    return <button className="px-4 py-2 text-xs md:text-base rounded-md bg-[#f2b099] text-stone-800 font-bold hover:bg-[#e07753] hover:text-stone-50 active:scale-95" {...props  }>
                {children}
            </button>
}