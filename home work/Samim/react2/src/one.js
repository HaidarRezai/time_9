import { DiVim } from "react-icons/di";
import { HiMinusSmall } from "react-icons/hi2";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Carts(){
    return(
        <div>
         <p className="text-stone-700">AI tools</p>
         <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><HiMinusSmall/></a>
        <span className='ml-2 text-stone-700'>50 credits for AI tools</span> <br/>
            <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><HiMinusSmall/></a>
        <span className='ml-2 text-stone-700'>AI logo maker</span>
        <p className="ml-2 text-stone-700 mt-3">Hosting</p>
        <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
        <span className='ml-2  text-stone-700 '> <span className="text-black font-bold">Weekly</span> backups</span>
        <p className='leading-0 text-sm ml-5'>----------------------------</p>
        <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
        <span className='ml-2  text-stone-700 '> <span className="text-black font-bold">10 GB</span> of storage</span> <br/>
         <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><HiMinusSmall/></a>
        <span className='ml-2 text-stone-700'>Team collaboration</span> <br/>
        <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
        <span className='ml-2  text-stone-700 '>24/7 support</span>
        </div>
    )
}

export default Carts;