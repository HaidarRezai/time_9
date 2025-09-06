import A from "./carts,js/A";
import B from "./carts,js/B";
import C from "./C";
import D from "./carts,js/D";
import E from "./E";
function App() {
  return (
    <div className="w-[70%] h-auto border m-auto bg-[#0E1217] rounded-lg mt-[20px] overflow-hidden">
      {/* -------------------A-------- */}
      <A />
      <main>
        <div className="border border-gray-400 text-white  grid grid-cols-[65%_auto] p-0 px-8 max-md:px-1 mt-0 max-md:grid-cols-1">
          <div className="border">
            {/* ---------------B------------ */}
            <B />
            {/* --------------C----------- */}
            <C />
            {/* -------------D--------- */}
            <D />
            {/* --------------E------------- */}
            <E />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
