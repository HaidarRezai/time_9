// function A() {
//     return (
//         <div className="flex max-md:flex-col max-md:items-start max-md:gap-6 justify-between items-center my-6">
//             <div className="flex gap-2 items-center">
//                 <div className="w-12 h-12 rounded-full overflow-hidden">
//                     <img src="./image/profile.webp" alt="" />
//                 </div>
//                 <div>
//                     <h1 className="text-[#A8B3CF]"><b>Omid Ahamdi</b>, @Omid_admadi Age:26</h1>
//                     <div className="flex items-center gap-1">
//                         <i className="bi bi-outlet text-blue-600"></i>
//                         <span className="font-bold">1.1k</span>
//                         <div className="w-4 h-4 overflow-hidden rounded-full border border-2xl border-gray-600">
//                             <img src="./image/pen.png" alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <button className="border p-2 rounded-xl">
//                     <i className="bi bi-arrow-up-right-square"></i>
//                     <span>Read post</span>
//                 </button>
//                 <i className="bi bi-three-dots-vertical text-[#A8B3CF] font-bold"></i>
//             </div>
//         </div>
//     );
// }
// export default A;

import React from "react";

class A extends React.Component {
    render() {
        return (
            <div className="flex max-md:flex-col max-md:items-start max-md:gap-6 justify-between items-center my-6">
                <div className="flex gap-2 items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src="./image/profile.webp" alt="" />
                    </div>
                    <div>
                        <h1 className="text-[#A8B3CF]"><b>Omid Ahamdi</b>, @Omid_admadi Age:26</h1>
                        <div className="flex items-center gap-1">
                            <i className="bi bi-outlet text-blue-600"></i>
                            <span className="font-bold">1.1k</span>
                            <div className="w-4 h-4 overflow-hidden rounded-full border border-2xl border-gray-600">
                                <img src="./image/pen.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="border p-2 rounded-xl">
                        <i className="bi bi-arrow-up-right-square"></i>
                        <span>Read post</span>
                    </button>
                    <i className="bi bi-three-dots-vertical text-[#A8B3CF] font-bold"></i>
                </div>
            </div>
        )
    }
}

export default A