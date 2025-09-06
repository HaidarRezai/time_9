// Mit Arrow Function
const Bmain = () => {
    return (
        <>
            <div className="text-white py-2">
                <p className="w-150 max-md:w-[100%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita eligendi excepturi debitis
                    eaque consequatur cupiditate odio voluptate in laudantium deleniti! Facilis ad vel veritatis!
                    Deserunt molestiae architecto neque unde
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eligendi excepturi debitis
                    eaque consequatur cupiditate odio <a href="" className="text-blue-900">Show more</a> </p>
            </div>
            <div className="text-white py-2">
                <a href="" className="border border-[#272A2F] text-[#A5ADC0] rounded-[10px] p-1 px-4 ">#ai</a>
                <a href="" className="border border-[#272A2F] text-[#A5ADC0] rounded-[10px] p-1 px-4 ">#python</a>
            </div>
            <div className="py-2 text-[#A5ADC0] text-[16px] flex items-center">
                <p>Aug 15<i className="bi bi-dot text-[20px]"></i>2m read time <i className="bi bi-dot text-[20px]"></i>From
                    <a href="" className="hover:border-b border-[#A5ADC0]">infoworld.com</a>
                </p>
            </div>
            <div className="py-2">
                <img src="Placeholder .webp" alt="" className="w-100 rounded-2xl" />
            </div>
            <div className="py-3">
                <a href="" className="hover:border-b border-[#A5ADC0] text-[#A5ADC0]">7 Upvotes</a>
            </div>
        </>
    )
}

export default Bmain;