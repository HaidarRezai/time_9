function Aasid() {
    return (
        <div className="border border-[#2D323B] w-[280px] h-[25vh] p-4 rounded-2xl mt-6">
            <div className="flex justify-between">
                <img src="logo.gif" alt=""
                    className="h-[3rem] w-[3rem] rounded-full overflow-hidden object-cover shadow-[0_0_20px_5px_#113E6C] cursor-pointer" />
                <button
                    className="bg-white rounded-lg w-22 h-8 font-bold text-black hover:bg-gray-300 cursor-pointer">Follow</button>
            </div>
            <div className="text-white mt-4 leading-8">
                <p>Sohanur Rahman Emon</p>
                <p className="text-[#757783]">@Sohanemon joined Dex 6.2022</p>
                <div
                    className="flex items-center justify-center gap-2 border border-[#383C47] w-18 px-1 rounded-lg ">
                    <i
                        className="bi bi-snow p-1 bg-[#6155B8] text-black rounded-full flex justify-center items-center"></i>
                    <p className="font-bold">270</p>
                </div>
                <p className="text-[#757783] text-[12px]">Engineering innvotion form concept to code.</p>
            </div>
        </div>
    )
}

export default Aasid;