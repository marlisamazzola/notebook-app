import Button1 from "./Button1";
import Button2 from "./Button2";

export default function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-surface p-6 rounded-lg w-80 text-center shadow-xl">
                <p className="mb-4 text-text-main">{message}</p>
                <div className="flex justify-center gap-4">
                    <Button1 onClick={onConfirm}>Si</Button1>
                    <Button2 onClick={onCancel}>No</Button2>
                </div>
            </div>
        </div>
    );
}