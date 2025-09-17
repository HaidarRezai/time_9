import { createPortal } from "react-dom";

function Popup({ isOpen, onClose, children }) {
    if (!isOpen) return null;   // ✅ richtig: isOpen benutzen
    return createPortal(
        <div  onClick={onClose}  className="bg-blue-200/50 inset-0 h-[100vh] fixed flex justify-center items-center">
            <div className="w-[35%] bg-gray-100/50 rounded-lg shadow-[0_0_10px_gray] p-10 flex flex-col justify-center items-center">
                {children}
                <button onClick={onClose}
                    className="rounded-lg px-20 py-2 my-2 bg-gradient-to-r from-blue-200 to-blue-900 hover:from-blue-900 hover:to-blue-200 text-white font-extrabold tracking-wider">
                    Close
                </button>
            </div>
        </div>,
        document.body
    );
}

export default Popup;

