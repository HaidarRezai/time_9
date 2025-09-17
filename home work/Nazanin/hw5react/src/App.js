import { createRoot } from "react-dom/client";
import { useState } from "react";
import Popup from "./popup";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="">
      <button onClick={() => setIsOpen(true)} className="mt-30  ml-100 border border-gray-100 shadow-xl w-40 p-1 bg-sky-100"> open pouop</button>
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} >
        <h1>hello </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim voluptatem quaerat magnam veniam ipsa cupiditate aut? Assumenda cumque saepe veniam voluptate optio ipsum, laudantium repellat repellendus ipsam vel sapiente!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, enim voluptatem quaerat magnam veniam ipsa cupiditate aut? Assumenda cumque saepe veniam voluptate optio ipsum, laudantium repellat repellendus ipsam vel sapiente!</p>
      </Popup>
    </div>
  );
}

export default App;
