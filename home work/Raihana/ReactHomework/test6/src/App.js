import Head from "./head";
import Amain from "./amain";
import Bmain from "./bmain";
import Cmain from "./cmain";
import Dmain from "./dmain";
import Aasid from "./aasid";
import Basid from "./basid";

function App() {
  return (
    <div className="flex justify-center  max-md:p-">
      <div
        className="border-2 border-[#2D323B] w-[70%] m-4  grid grid-cols-[75%_auto] max-md:grid-cols-[1] bg-[#0D1216] rounded-2xl overflow-hidden max-md:w-[100%] ">
        {/* header */}
        <Head />
        {/* main */}
        <main className="border-r border-[#2D323B] p-6">
          {/* --------------------a------------------- */}
          <Amain />
          {/* -------------------b-------------------- */}
          <Bmain />
          {/* --------------------c-------------------- */}
          <Cmain />
          {/* ---------------------d-------------------*/}
          <Dmain />
        </main>
        {/* asid */}
        <aside className=" flex flex-col items-center text-[#757783]">
          {/* -------------------aasid-----------------*/}
          <Aasid />
          {/* ----------------------basid------------- */}
          <Basid />
        </aside>
      </div>
    </div>
  );
}

export default App;
