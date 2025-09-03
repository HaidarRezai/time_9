function D() {
    return (
        <>
            <div className="mt-3">
                <img src="c:\Users\ramin\Desktop\samim\tailwindcsshomework\.webp" alt="" className="w-120 h-50 rounded-2xl border  border-[#A3A9B7]" />
            </div>
            <div className="mt-5 text-[#A3A9B7] text-1xl flex gap-6">
                <p>34 Upvotes</p>
                <p>13 Comments</p>
            </div>
            <div className="border flex gap-13 text-2xl text-[#A3A9B7]  font-bold p-2 rounded-lg mt-5 max-md:flex-col max-md:gap-2">
                <div className="hover:text-green-900"><i className="bi bi-arrow-up-square-fill"></i></div>
                <div className="hover:text-red-900"><i className="bi bi-arrow-down-square-fill"></i></div>
                <div className="hover:text-blue-900"><i className="bi bi-chat-left-text px-2"></i>Comment</div>
                <div className="hover:text-amber-700"><i className="bi bi-bookmark"></i> bookmark</div>
                <div className="hover:text-fuchsia-900"><i className="bi bi-copy"></i> bookmark</div>
            </div>
        </>
    )
}

export default D;