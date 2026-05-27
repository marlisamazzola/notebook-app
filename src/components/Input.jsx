export default function Input({ label, textArea, ...props }) {

    const classes = "w-full p-1 border-b-2 rounded-sm bg-surface text-text-main focus:outline-none focus:border-accent transition-all";

    return (
        <p className="flex flex-col gap-1 mb-4">
            <label className="text-sm font-bold uppercase text-text-main">
                {label}
            </label>
            {textArea ? (
                <textarea className={classes} {...props} />
            ) : (
                <input className={classes} {...props} />
            )}
        </p>
    );
}
