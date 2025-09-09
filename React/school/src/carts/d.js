const D = () => {
    return (
        <div className="border border-[#1C1F26] p-4 rounded-2xl">
            <div className="flex justify-between items-center">
                <div className="w-10 h-10 overflow-hidden my-2 rounded-full justify-center items-center">
                    <img src="./image/profile.webp" className="w-[100%] h-[100%] object" alt="" />
                </div>
                <div>
                    <i className="bi bi-three-dots-vertical text-[#A8B3CF] font-bold"></i>
                    <button>Save</button>
                </div>
            </div>
            <h1 className="font-bold">
                Mobile developers
            </h1>
            <p>
                For iOS, Android and all the developers in between, this is the Squad for mobile developers.
                8.5K Members
            </p>
            <div className="flex gap-6 my-6">
                <a href="#">23 Upvotes</a>
                <a href="#">2 Comments</a>
            </div>
        </div>
    )
}

export default D;