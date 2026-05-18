export default function Input({ label, textArea, ...props }) {

    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-100 text-stone-900 focus:outline-none focus:border-[#f2b099] transition-all"

    return <p className="flex flex-col gap-1 mb-4">
        <label className="text-sm font-bold uppercase text-stone-600">{label}</label>
        {textArea ? (
            <textarea className={classes} {...props}></textarea>
        ) : (
            <input className={classes} {...props} />
        )}
    </p>
}