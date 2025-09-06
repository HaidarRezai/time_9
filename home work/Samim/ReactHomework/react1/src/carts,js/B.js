function B() {
    return (
        <>
            <div className="flex justify-between py-2 ">
                <p>java_libhunt</p>
                <button className="border-2 border-gray-400 rounded-xl p-1 ml-140 max-md:ml-4 font-bold "><i className="bi bi-arrow-up-right px-1 font-bold"></i>Read post</button>
                <i className="bi bi-three-dots-vertical py-2 px-5 max-md:px-0"></i>
            </div>
            <div className="text-3xl  font-bold w-[60%] max-md:w[30%]">
                <p >7 Habits That Quietly Made Me a 10x Developer (No, Not ChatGPT)</p>
            </div>
            <div className="w-175 max-md:w-[100%] border-gray-400 border-2 flex gap-2 p-4 rounded-2xl  h-[4rem]">
                <i className="bi bi-exclamation-octagon text-2xl text-yellow-300"></i>
                <p>This title could be clearer and more informative. Tary out cilckbait for free(5 uses left this month).</p>
            </div>
            <div className="border flex mt-10 gap-2 py-2 text-[#A3A9B7] max-md:flex-col max-md:w-[100%]">
                <div className="w-27  h-7 flex bg-[#CE3DF3] text-black font-bold rounded-lg max-md:w-[100%] "><i className="bi bi-arrow-return-right px-2"></i> <p>TLDR</p></div>
                <div className="w-32 border border-gray-400 flex   font-bold rounded-lg  hover:bg-gray-700 max-md:w-[100%]"><i className="bi bi-brightness-high-fill px-1 text-red-700 text-1xl"></i> <p>Remove fluff</p></div>
                <div className="w-32 border border-gray-400 flex   font-bold rounded-lg  hover:bg-gray-700 max-md:w-[100%]"><i className="bi bi-brightness-high-fill px-1 text-green-700 text-1xl"></i> <p>Simplify it</p></div>
                <div className="w-32 border border-gray-400 flex   font-bold rounded-lg  hover:bg-gray-700 max-md:w-[100%]"><i className="bi bi-brightness-high-fill px-1 text-blue-700 text-1xl"></i> <p>change this</p></div>
                <div className="w-25 border border-gray-400 flex   font-bold rounded-lg hover:bg-gray-700 max-md:w-[100%]"> <p className="px-2"> 5+ more</p> <i className="bi bi-chevron-down text-1xl "></i></div>
            </div>
        </>
    )
}
export default B