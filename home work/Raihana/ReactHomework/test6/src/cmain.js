function Cmain() {
    return (
        <div className="border border-[#272A2F] rounded-2xl py-1 text-white flex justify-around items-center max-md:flex-col max-md:mb-2">
            <i
                className="bi bi-arrow-up-short px-2 text-[24px] text-[#A5ADC0] hover:bg-[#12432C] hover:text-[#39E58C] rounded-[12px]"></i>
            <i
                className="bi bi-arrow-down-short px-2 text-[24px] text-[#A5ADC0] hover:bg-[#3E181A] hover:text-[#E04337] rounded-[12px]"></i>
            {/* <!-- Comment --> */}
            <div className="flex items-center px-4 text-[18px] font-bold text-[#A5ADC0] cursor-pointer group">
                <i className="bi bi-chat-square-text pr-2 text-[24px] rounded-[12px] px-2
               group-hover:bg-[#0E4046] group-hover:text-[#2CDCE6]"></i>
                <span className="group-hover:text-[#2CDCE6]">Comment</span>
            </div>
            {/* <!-- Bookmark --> */}
            <div className="flex items-center px-4 text-[18px] font-bold text-[#A5ADC0] cursor-pointer group">
                <i className="bi bi-bookmark pr-2 text-[24px] rounded-[12px] px-2
               group-hover:bg-[#482B1C] group-hover:text-[#FF8E3B]"></i>
                <span className="group-hover:text-[#FF8E3B]">Bookmark</span>
            </div>
            {/* <!-- Copy --> */}
            <div className="flex items-center px-4 text-[18px] font-bold text-[#A5ADC0] cursor-pointer group">
                <i className="bi bi-c-circle pr-2 text-[24px] rounded-[12px] px-2
               group-hover:bg-[#39184A] group-hover:text-[#CE3DF3]"></i>
                <span className="group-hover:text-[#CE3DF3]">Copy</span>
            </div>
        </div>
    )
}

export default Cmain;