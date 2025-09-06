// import { CgEditFade } from "react-icons/cg";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsDatabase } from "react-icons/bs";
import { BsBuildingUp } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { ImPodcast } from "react-icons/im";

function B() {
    return (
        <>
            <div className=" rounded-2xl  p-1 bg-[#673DE6]">
                <p className="   text-white text-xl flex justify-center items-center    ">MOST POPULAR</p>
                <div className=" h-[750px] mt-5 rounded-2xl bg-[#FAFBFF] p-2">
                    <div className="   bg-blue-100  w-fit p-2 rounded-2xl ml-80 mt-5 px-5">95%OFF</div>
                    <div className=" w-100 m-auto  ">
                        <h1 className="text-xl font-bold  leading-10">Business</h1>
                        <p>More tools and power for growth</p>
                        <p className="leading-25">US$<span className="font-bold text-xl">8.66/</span>mo</p>
                        <p className="font-bold leading-7 text-violet-800">+2 months free</p>
                        <div className="w-100 border text-center p-2 rounded-2xl border-[#673DE6] font-bold text-white bg-[#673DE6]">Chosse Plan</div>
                        <p className="text-sm mt-5">Get 48 months for US$ 143.52 (regular price US$ 575.52). Renews at US$ 10.99/mo.</p>
                        <div className=" border-sky-300 border-t-0"></div>
                        <div className="border border-sky-100 mt-8"></div>
                        <div className=" mt-4 flex text-sm gap-2 text-gray-700"><MdOutlineMailOutline className="text-xl  " /> <p>Create up to 25 websites </p> </div>
                        <div className=" mt-1 flex text-sm gap-2 text-gray-700">< BsBuildingUp className="text-xl" /><p>50 GB of world’s fastest NVMe storage</p></div>
                        <div className=" mt-1 flex text-sm gap-2 text-gray-700">< BsDatabase className="text-xl" /><p>2 mailboxes per website - free for 1 year</p></div>
                        <div className="ml-7 relative bottom-3">--------------------------------</div>
                        <h1 className="fond-bold mt-4">Everything in Premium, plus:</h1>
                        <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl mt-4" /><p className="mt-4" >Daily and on-demand backups to prevent any data loss</p></div>
                        <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl mt-2  " /><p className="  mt-2" >Build an ecommerce site with AI </p></div>
                        <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl mt-2" /><p className="mt-2" >AI Agent for WordPress</p></div>
                        <div className="ml-7 relative bottom-4">----------------------  </div>
                        <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl -mt-2" /><p className="-mt-2" >AI Agent for WordPress </p></div>
                        <div className="ml-7 relative bottom-4  ">----------------------  </div>
                        <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl -mt-2" /><p className="-mt-2" > Create ready-to-go WordPress sites in minutes with AI</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default B;