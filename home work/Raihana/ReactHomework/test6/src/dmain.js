function Dmain() {
    return (
        <>
            <div className="text-white py-3">
                <p>Sort: <a href="" className="font-bold">Oldest first<i className="bi bi-journal-arrow-up pl-2"></i></a>
                </p>
            </div>
            <div
                className="border border-[#272A2F] text-white py-2 px-3 rounded-[15px] hover:border-gray-400 flex justify-between items-center cursor-pointer max-md:flex-col">
                <div className="flex items-center gap-2 text-[#A5ADC0]">
                    <img src="logo.gif" alt="" className="w-[4rem] h-[4rem] object-cover rounded-2xl " />
                    <p>Share your thoughts</p>
                </div>
                <button
                    className="text-white border border-[#272A2F] font-bold px-6 p-1 rounded-lg cursor-pointer">Post</button>
            </div>
            <div className="text-[#A5ADC0] py-6 flex justify-center items-center">
                <p>Be the first to comment</p>
            </div>
        </>
    )
}

export default Dmain;