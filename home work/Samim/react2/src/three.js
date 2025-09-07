
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { HiMinusSmall } from "react-icons/hi2";
import { TbAdjustmentsStar } from "react-icons/tb";
import { FaPencil } from "react-icons/fa6";

function Carten() {
    return (
        <div className="rounded-full">
            <div className=' bg-white  w-[20%] gap-10 h-[69rem] rounded-4xl ml-320 -mt-277 p-4 pl-6 leading-7 pr-6'>
                <button className="rounded-full h-[2rem] ml-65 bg-[#D5DFFF]  w-[22%] mb-10 mt-5 pb-5  font-bold">73%OFF</button>
                <p className='font-bold text-2xl'>Scale + AI  </p>
                <p className='w-[90%] leading-6'>Built for teams that won’t compromise on speed, security, or control</p>
                <p className='mt-3'>US$ <span className='font-bold text-4xl'>7.79</span>/mo</p>
                <button className='border w-[90%] rounded-lg h-[3rem] text-[#6743EA] font-bold mt-5 '>Choose Plan</button>
                <p className='leading-4 text-stone-500 text-[12px] mt-4 w-[90%]' > Choose plan Get 48 months for US$ 181.92 (regular price US$ 671.52). Renews at US$ 13.99/mo.</p>
                <hr className='w-[95%]bg-stone-100 opacity-25 mt-10'></hr>
                <p className='mt-5 '>Publish</p>
                <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
                <span className='ml-2  text-stone-700 '>free domain for 1 year</span>
                <p className='leading-0 text-sm ml-5'>----------------------------</p>
                <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
                <span className='ml-2  text-stone-700 '>Up to 100 websites</span> <br />
                <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><IoCheckmarkCircleOutline /></a>
                <span className='ml-2  text-stone-700 -mt-10'>Vibe Code websites</span><br />
                <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><IoCheckmarkCircleOutline /></a>
                <span className='ml-2  text-stone-700 -mt-10'>Up to 100 websites</span> <br />
                <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '></a>
                <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><IoCheckmarkCircleOutline /></a>
                <span className='ml-2  text-stone-700 -mt-10'><span className="font-bold">Advanced</span> ecommerce</span> <br />
                <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '></a>
                <p className='text-stone-700 -mt-4'>Connect</p>
                <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
                <span className='ml-2  text-stone-700 '>Business email</span>
                <p className='leading-0 text-sm ml-5'>----------------------------</p>
                <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
                <span className='ml-2  text-stone-700 '> <span className="font-bold">10</span> mailboxes for 1 year</span> <br />
                <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><HiMinusSmall /></a>
                <span className='ml-2 text-stone-700'>Email marketing up to <span className="font-bold">1000</span> subscribers</span>
                <div>
                    <p className="text-stone-700">AI tools</p>
                    <a className='   text-[#6743EA] font-bold leading-0 text-1.5xl inline-block '><TbAdjustmentsStar /></a>
                    <span className='ml-2 text-stone-700'>100 free credits for AI tools</span> <br />
                    <a className='   text-[#6743EA] font-bold leading-0 text-1xl inline-block '><FaPencil /></a>
                    <span className='ml-2 text-stone-700'>AI logo maker</span>
                    <p className="ml-2 text-stone-700 mt-3">Hosting</p>
                    <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
                    <span className='ml-2  text-stone-700 '> <span className="text-black font-bold">Daily </span>backups</span>
                    <p className='leading-0 text-sm ml-5'>----------------------------</p>
                    <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
                    <span className='ml-2  text-stone-700 '> <span className="text-black font-bold">50 GB</span> of storage</span> <br />
                    <a className='  text-green-800 font-bold leading-0 text-1xl inline-block '><IoCheckmarkCircleOutline /></a>
                    <span className='ml-2 text-stone-700'>Advanced analytics dashboard</span> <br />
                    <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
                    <span className='ml-2  text-stone-700 '>Team collaboration</span>
                    <span className='ml-2 text-stone-700'>Advanced analytics dashboard</span> <br />
                    <a className='inline-block  text-green-800 font-bold leading-0 text-1xl  '><IoCheckmarkCircleOutline /></a>
                    <span className='ml-2  text-stone-700 '> <span className="font-bold ">Priority</span> 24/7 support</span>
                </div>
            </div>
        </div>
    )
}
export default Carten