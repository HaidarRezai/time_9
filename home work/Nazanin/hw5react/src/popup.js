
import { createPortal } from "react-dom";

function Popup({ isOpen, onClose, children }) {
    if (!isOpen) return null
    return createPortal(
        <div className="w-200 h-100 border  border-gray-100 shadow-xl ml-100 rounded-xl bg-rose-100 p-2">
            {children}
            <button onClick={onClose} className="mt-30 ml-150 px-3 bg-gray-200 shadow-xl ">close</button>
        </div>,
        document.body
    );
}
export default Popup;