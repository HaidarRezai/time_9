import { useState } from "react";
import Popup from "./popup";

function App() {
  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);

  return (
    <div className="flex justify-center items-start mt-[100px] h-[100vh] gap-4">
      {/* Erstes Popup Button */}
      <button
        onClick={() => setMenu(true)}
        className="rounded-lg px-10 py-2 bg-gradient-to-r from-blue-500 to-purple-600 
        hover:from-purple-600 hover:to-blue-500 text-white font-extrabold tracking-wider">
        Open Popup 1
        {/* das ist die weg konnte man auch offenen und schliesen*/}
        {/* {(menu) ? "Close" : "Open"} */}
      </button>

      {/* Zweites Popup Button */}
      <button
        onClick={() => setMenu2(true)}
        className="rounded-lg px-10 py-2 bg-gradient-to-r from-blue-500 to-purple-600 
        hover:from-purple-600 hover:to-blue-500 text-white font-extrabold tracking-wider">
        Open Popup 2
      </button>

      {/* Popup 1 */}
      <Popup isOpen={menu} onClose={() => setMenu(false)}>
        <h1 className="text-xl font-bold mb-2">Popup 1</h1>
        <p className="my-2 m-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione ex voluptas esse expedita quam sunt incidunt nostrum fugiat facilis corrupti.
        </p>
      </Popup>

      {/* Popup 2 */}
      <Popup isOpen={menu2} onClose={() => setMenu2(false)}>
        <h1 className="text-xl font-bold mb-2">Popup 2</h1>
        <img src="https://wallpapercave.com/wp/wp8149607.jpg"
          alt="Wallpaper"
          className="rounded-lg shadow-xl"/>
      </Popup>
    </div>
  );
}

export default App;
