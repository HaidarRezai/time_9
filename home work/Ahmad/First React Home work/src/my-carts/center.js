import React from "react";
import { RiSparkling2Fill } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";

import { RiQuillPenAiFill } from "react-icons/ri";

class Center extends React.Component {
    render() {

        return (
            <div className="w-[26%] bg-[#8c85ff] rounded-[24px] py-1  flex justify-center flex-col items-center ">
                <h1 className="font-black text-white text-xl ">RECOMMENDED</h1>
                <div className="w-[99%]  rounded-[18px] bg-[#fafbff] border-1 border-[#d5dfff] px-3 py-9 ">
                    <div className="w-full flex justify-end ">
                        <p className="text-[12px] font-bold bg-[#d5dfff] w-20 rounded-full px-2 py-1 flex justify-center items-center ">73% OFF</p>
                    </div>
                    <div>
                        <h1 className="font-bold mb-1 text-lg flex items-center gap-2">Growth + AI <RiSparkling2Fill className="text-[#673de6] text-xl" /></h1>
                        <p className="text-[12px]">Made for high-traffic sites, scaling teams, and global growth</p>
                    </div>
                    <div>
                        <span><span className="text-[15px]">US$</span><span className="text-[30px] font-bold">3.79</span><span className="text-[15px]">/mo</span></span>
                    </div>
                    <div className="mt-3">
                        <button className="w-full py-2.5 px-4 rounded-lg bg-[#673de6] text-white font-semibold border border-[#673de6] hover:bg-[#8260e6] transition-colors duration-300 shadow-sm cursor-pointer">
                            Choose plan
                        </button>
                        <span className="mt-4 text-gray-600 text-[11px] leading-relaxed block ">Get 48 monthsfor  <span className="font-bold text-gray-500"> US$ 181.92</span>(regular price US$ 575.52).Renews at US$ 10.99/mo.</span>
                    </div>
                    <hr className="mt-7 text-gray-500"></hr>
                    <div className="mt-7 space-y-2">
                        <h1 className="text-gray-500 mb-3">Publish</h1>

                        <div className="flex items-center gap-2 relative group cursor-pointer">
                            <CiCircleCheck className="text-green-500 " />
                            <span className="underline decoration-dotted decoration-2 decoration-gray-400 underline-offset-4">
                                Free domain for 1 year
                            </span>
                            <p
                                className="absolute z-20 left-6 top-0 mt-8 w-64
                                            whitespace-pre-line text-sm leading-relaxed
                                            bg-indigo-500 text-white px-4 py-3 rounded-xl
                                            shadow-xl ring-1 ring-indigo-300
                                            opacity-0 translate-y-1 invisible
                                            group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
                                            transition-all duration-200 ease-out pointer-events-none
                                            after:content-[''] after:absolute after:-top-1.5 after:left-8
                                            after:w-3 after:h-3 after:bg-indigo-500 after:rotate-45
                                            after:ring-1 after:ring-indigo-300"
                            >
                                Free domain and website migration
                                Quick setup, easy to scale
                                Fully managed maintenance for WooCommerce
                                24/7 customer support
                            </p>
                        </div>

                        <div className="flex items-center gap-2 relative group cursor-pointer">
                            <CiCircleCheck className="text-green-500" />
                            <span>
                                Up to 1 website
                            </span>
                        </div>

                        <div className="flex items-center gap-2 relative group cursor-pointer">
                            <CiCircleCheck className="text-green-500" />
                            <span className="underline decoration-dotted decoration-2 decoration-gray-400 underline-offset-4">
                                Vibe Code websites
                            </span>
                            <p
                                className="absolute z-20 left-6 top-0 mt-8 w-64
                                            whitespace-pre-line text-sm leading-relaxed
                                            bg-indigo-500 text-white px-4 py-3 rounded-xl
                                            shadow-xl ring-1 ring-indigo-300
                                            opacity-0 translate-y-1 invisible
                                            group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
                                            transition-all duration-200 ease-out pointer-events-none
                                            after:content-[''] after:absolute after:-top-1.5 after:left-8
                                            after:w-3 after:h-3 after:bg-indigo-500 after:rotate-45
                                            after:ring-1 after:ring-indigo-300"
                            >
                                Free domain and website migration
                                Quick setup, easy to scale
                                Fully managed maintenance for WooCommerce
                                24/7 customer support
                            </p>
                        </div>

                        <div className="flex items-center gap-2 relative group cursor-pointer">
                            <CiCircleCheck className="text-green-500" />
                            <span >
                                Pre-built templates
                            </span>
                        </div>
                        <div className="flex items-center gap-2  mb-9">
                            <CiCircleCheck className="text-green-500" />Basic ecommerce
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 mb-1">
                            Connect
                        </div>
                        <div className="flex items-center gap-2 relative group cursor-pointer">
                            <CiCircleCheck className="text-green-500" />
                            <span className="underline decoration-dotted decoration-2 decoration-gray-400 underline-offset-4">
                                Business email
                            </span>
                            <p
                                className="absolute z-20 left-6 top-0 mt-8 w-64
                                            whitespace-pre-line text-sm leading-relaxed
                                            bg-indigo-500 text-white px-4 py-3 rounded-xl
                                            shadow-xl ring-1 ring-indigo-300
                                            opacity-0 translate-y-1 invisible
                                            group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
                                            transition-all duration-200 ease-out pointer-events-none
                                            after:content-[''] after:absolute after:-top-1.5 after:left-8
                                            after:w-3 after:h-3 after:bg-indigo-500 after:rotate-45
                                            after:ring-1 after:ring-indigo-300"
                            >
                                Free domain and website migration
                                Quick setup, easy to scale
                                Fully managed maintenance for WooCommerce
                                24/7 customer support
                            </p>
                        </div>

                        <div className="flex items-center gap-2 relative group cursor-pointer">
                            <CiCircleCheck className="text-green-500" />
                            <span>
                                <span className="font-bold">1</span>   mailbox for 1 year
                            </span>
                        </div>
                        <div className="flex items-center gap-2  mb-9">
                            <CiCircleCheck className="text-green-500" />Email marketing up to 500 subscribers
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 ">
                            AI tools
                        </div>
                        <div className="flex items-center gap-2 ">
                            <RiSparkling2Fill className="text-[#673de6] " />50 credits for AI tools
                        </div> <div className="flex items-center gap-2 ">
                            <RiQuillPenAiFill className="text-[#673de6] " />AI logo maker
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 mt-9 ">
                            Hosting
                        </div>
                        <div className="flex items-center gap-2 relative group cursor-pointer">
                            <CiCircleCheck className="text-green-500" />
                            <span className="underline decoration-dotted decoration-2 decoration-gray-400 underline-offset-4">
                                Vibe Code websites
                            </span>
                            <p
                                className="absolute z-20 left-6 top-0 mt-8 w-64
                                            whitespace-pre-line text-sm leading-relaxed
                                            bg-indigo-500 text-white px-4 py-3 rounded-xl
                                            shadow-xl ring-1 ring-indigo-300
                                            opacity-0 translate-y-1 invisible
                                            group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
                                            transition-all duration-200 ease-out pointer-events-none
                                            after:content-[''] after:absolute after:-top-1.5 after:left-8
                                            after:w-3 after:h-3 after:bg-indigo-500 after:rotate-45
                                            after:ring-1 after:ring-indigo-300"
                            >
                                Free domain and website migration
                                Quick setup, easy to scale

                            </p>
                        </div>
                        <div className="flex items-center gap-2 relative group cursor-pointer">
                            <CiCircleCheck className="text-green-500" />
                            <span >
                                <span className="font-bold">10 GB</span> of storage
                            </span>

                        </div>
                        <div className="flex items-center gap-2 ">
                            <CiCircleCheck className="text-green-500" />Advanced analytics dashboard
                        </div> <div className="flex items-center gap-2 ">
                            <CiCircleCheck className="text-green-500" />Team collaboration
                        </div>
                        <div className="flex items-center gap-2 relative group cursor-pointer">
                            <CiCircleCheck className="text-green-500" />
                            <span >
                                24/7 support
                            </span>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default Center;