import { CgEditFade } from "react-icons/cg";
import { BsDatabase } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { BsArchive } from "react-icons/bs";
import { ImPodcast } from "react-icons/im";

function C() {
    return (
        <div className=" rounded-2xl  h-[750px] p-1 ">
            <div className="border  h-[750px] mt-10 mt-10 bg-[#FAFBFF] rounded-2xl border-sky-200 ">
                <div className="  bg-blue-100 w-fit p-2 rounded-2xl ml-80 mt-5 px-5">73%OFF</div>
                <div className="   w-100 m-auto  ">
                    <h1 className="text-xl font-bold  leading-10"> Cloud Startup</h1>
                    <p>Enjoy optimized performance & powerful</p>
                    <p className="leading-25">US$<span className="font-bold text-xl">3.45/</span>mo</p>
                    <p className="font-bold leading-7 text-violet-800">+2 months free</p>
                    <div className="w-100 border text-center p-2 rounded-2xl border-[#673DE6] font-bold text-violet-800">Chosse Plan</div>
                    <p className="text-sm mt-5">Get 48 months for US$ 143.52 (regular price US$ 575.52). Renews at US$ 10.99/mo.</p>
                    <div className="border border-sky-100 mt-8"></div>
                    <div className=" mt-4 flex text-sm gap-2 text-gray-700"><BsDatabase className="text-xl  " /> <p>Create up to 100 website </p> </div>
                    <div className=" mt-1 flex text-sm gap-2 text-gray-700">< CgEditFade className="text-xl" /><p>100 GB of world’s fastest NVMe storage</p></div>
                    <div className=" mt-1 flex text-sm gap-2 text-gray-700">< BsArchive className="text-xl" /><p>10 mailboxes per website - free for 1 yea</p></div>
                    <div className="ml-7 relative bottom-3">--------------------------------</div>
                    <h1 className="fond-bold mt-4">Everything in Business, plus:</h1>
                    <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl mt-4" /><p className="mt-2" >Handle peak traffic with power boost for a <br /> week/month</p></div>
                    <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl mt-4    " /><p className="mt-2" >Get extra control and stability with a unique <br />IP address</p></div>
                    <div className="flex gap-2 text-sm"><CiCircleCheck className="text-green-800 text-2xl mt-2" /><p className="mt-2" >Enjoy priority support – 24/7</p></div>
                </div>
            </div>
        </div>
    )
}
export default C;