// Mit CLASS
import React from "react";
class Amain extends React.Component {
    render() {
        return (
            <>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <div className="pr-2">
                            <img src="logo.gif" alt="" className="w-[4rem] h-[4rem] rounded-full object-cover" />
                        </div>
                        <div>
                            <span className="text-white">Sohanur Rahman Emon</span>
                            <span className="text-[#757783]">@Sohanemon joined Dex 6.2022</span>
                            <div className="flex">
                                <span className="flex items-center justify-center bg-[#6155B8] rounded-full w-6 h-6">
                                    <i className="bi bi-snow text-black"></i>
                                </span>
                                <span className="font-bold text-white">270</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-[20px] text-white font-bold">
                        <button className="border-2 border-white p-1 px-2 rounded-[10px] hover:text-gray-300"><i
                            className="bi bi-sign-turn-right pr-2"></i>Read Post</button>
                        <i
                            className="bi bi-three-dots-vertical text-[#868992] hover:bg-[#2D313A] hover:text-white rounded-lg px-1 cursor-pointer"></i>
                    </div>
                </div>
                <div className="text-white py-2">
                    <div className="text-white list-style-none">
                        <ul className="flex justify-between font-bold text-[#A5ADC0] cursor-pointer max-md:flex-col">
                            <li className="border border-[#272A2F] rounded-[10px] p-1 px-8 bg-[#D53BFD] text-black">
                                <i className="bi bi-journal-arrow-down pr-2"></i>TLDR
                            </li>
                            <li className="border border-[#272A2F] rounded-[10px] p-1 hover:bg-gray-800 px-8"><i
                                className="bi bi-sun pr-2 text-[#75BFC0]"></i>Simplify it
                            </li>
                            <li className="border border-[#272A2F] rounded-[10px] p-1 hover:bg-gray-800 px-8"><i
                                className="bi bi-sun pr-2 text-[#A25C5E]"></i>Remove fluff</li>
                            <li className="border border-[#272A2F] rounded-[10px] p-1 hover:bg-gray-800 px-8"><i
                                className="bi bi-sun pr-2 text-[#23795A]"></i>Challenge this</li>
                            <li className="border border-[#272A2F] rounded-[10px] p-1 hover:bg-gray-800 px-8">5+More<i
                                className="bi bi-chevron-down pr-2text-[#989EA5]"></i></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Amain;