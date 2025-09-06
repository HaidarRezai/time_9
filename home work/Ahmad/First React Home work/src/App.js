import './App.css';
import Center from './my-carts/center';
import Left from './my-carts/left';
import Right from './my-carts/right';
import { MdSupportAgent } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { RiSparkling2Fill } from "react-icons/ri";

function App() {
  return (
    <div className='border flex justify-evenly gap-2 items-center flex flex-col md:flex-col items-center gap-6 '>
      <p className='bg-violet-300 rounded-full px-2 py-1 font-bold text-[10px] mb-7 mt-10'>Plans and pricing</p>
      <h1 className='font-black text-4xl'>All-in-one plan for you</h1>
      <div className="mt-2 w-[40%] md:w-[40%] lg:w-[40%] mx-auto  py-4 px-6 flex flex-wrap justify-evenly items-center max-md:flex-col max-md:gap-4">
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
          <MdSupportAgent className="text-blue-600 text-lg" />
          24/7 support
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
          <CiGlobe className="text-green-600 text-lg" />
          Custom domain
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
          <GoHome className="text-orange-500 text-lg" />
          Web hosting
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
          <RiSparkling2Fill className="text-[#673de6] text-lg" />
          AI content tools
        </div>
      </div>

      <div className='w-full mt-1 flex justify-center gap-2 items-center md:flex-row flex-col md:w-auto '>
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;
