import { CgEditFade } from "react-icons/cg";
import { BsDatabase } from "react-icons/bs";
import { BsBuildingUp } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { ImPodcast } from "react-icons/im";
function A() {
    return (
        <>
            <div className=" rounded-2xl p-1">
                <div className="border  border-sky-200  bg-[#FAFBFF] h-[750px] mt-12 rounded-2xl p">
                    <div className=" bg-blue-100 w-fit p-2 rounded-3xl ml-80 mt-5 px-5">72%OFF</div>
                    <div className=" w-100 m-auto ">
                        <h1 className="text-xl font-bold  leading-10">Premium</h1>
                        <p>Everything you need to get started</p>
                        <p className="leading-25">US$<span className="font-bold text-xl">2.67/</span>mo</p>
                        <p className="font-bold leading-7 text-violet-800">+2 months free</p>
                        <div className="w-100 border text-center p-2 rounded-2xl border-[#673DE6] font-bold text-violet-800">Chosse Plan</div>
                        <p className="text-sm mt-5">Get 48 months for US$ 143.52 (regular price US$ 575.52). Renews at US$ 10.99/mo.</p>
                        <div className=" border-sky-300 border-t-0"></div>
                        <div className="border border-sky-100 mt-8"></div>
                        <div className=" mt-4 flex text-sm gap-2 text-gray-700"><CgEditFade className="text-xl  " /> <p>Create up to 25 websites </p> </div>
                        <div className=" mt-1 flex text-sm gap-2 text-gray-700"><BsDatabase className="text-xl" /><p>25 GB of storage for your files (SSD)</p></div>
                        <div className=" mt-1 flex text-sm gap-2 text-gray-700">< BsBuildingUp className="text-xl" /><p>2 mailboxes per website - free for 1 year</p></div>
                        <div className="ml-7 relative bottom-3">--------------------------------</div>
                        <h1 className="fond-bold mt-4">Premium benefits:</h1>
                        <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl mt-4" /><p className="mt-4" >Free domain for 1 year</p></div>
                        <div className="ml-7 relative bottom-4">----------------------  </div>
                        <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl -mt-2" /><p className="-mt-2" >Keep every site safe with free SSL</p></div>
                        <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl mt-2" /><p className="mt-2" >Get weekly auto backups for easy data</p></div>
                        <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl mt-2" /><p className="mt-2" >Email marketing  NEW</p></div>
                        <div className="ml-7 relative bottom-4">----------------------  </div>
                        <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl -mt-2" /><p className="-mt-2" >Keep every site safe with free SSL</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default A;