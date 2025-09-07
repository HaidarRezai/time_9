import logo from './logo.svg';
import './App.css';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { HiMinusSmall } from "react-icons/hi2";
import Carts from './one';
import Cart from './two';
import Carten from './three';

function App() {
  return (
    <div className="">

      <div className='bg-white  w-[20%] gap-10  h-[70rem] rounded-4xl mt-20 p-4 pl-6 leading-7 pr-6 ml-120 '>
        <button className=" rounded-full h-[2rem] ml-65 bg-[#D5DFFF]  w-[22%] mb-10 mt-5 pb-5  font-bold">75%OFF</button>
         <p className='font-bold text-2xl'>Basic</p>
         <p className='w-[80%] leading-6'>Ideal for portfolios, personal sites, and early-stage projects</p>
         <p className='mt-3'>US$ <span className='font-bold text-4xl'>2.99</span>/mo</p>
         <button className='border w-[90%] rounded-lg h-[3rem] text-[#6743EA] font-bold mt-5 '>Choose Plan</button>
         <p className='leading-4 text-stone-500 text-[12px] mt-4 w-[80%]' >Get 48 months for US$ 143.52 (regular price US$ 575.52). Renews at US$ 10.99/mo.</p>
         <hr className='w-[95%]bg-stone-100 opacity-25 mt-10'></hr>
  
         <p className='mt-5 '>Publish</p>
        <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
        <span className='ml-2  text-stone-700 '>free domain for 1 year</span>
        <p className='leading-0 text-sm ml-5'>----------------------------</p>

          <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
        <span className='ml-2  text-stone-700 '>Up to 1 website</span> <br/>

         <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><IoCheckmarkCircleOutline /></a>
        <span className='ml-2  text-stone-700 -mt-10'>Vibe Code websites</span><br/>
      
         <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><IoCheckmarkCircleOutline /></a>
        <span className='ml-2  text-stone-700 -mt-10'>Pre-built templates</span> <br/>
        <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><HiMinusSmall/></a>
        <span className='ml-2'>Ecommerce</span>
        <p className='text-stone-700'>Connect</p>
        <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
        <span className='ml-2  text-stone-700 '>Business email</span>
        <p className='leading-0 text-sm ml-5'>----------------------------</p>

              <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
        <span className='ml-2  text-stone-700 '>1 mailbox for 1 year</span> <br/>

               <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><HiMinusSmall/></a>
        <span className='ml-2 text-stone-700'>Email marketing up to 500 subscribers</span>
        <Carts/>
 

        
        

     

     </div>
     <Cart/> 
     <div>
      <Carten/>
     </div>
    </div>
  );
}

export default App;
