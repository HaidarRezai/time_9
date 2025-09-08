/*
class 

functional
    1 function sem
    2 arrow functions
   
*/

function F() {
    return (
        <div className="flex justify-between p-2 max-md:p-1 bg-[#1C1F26]">
            <div className="flex gap-2">
                <div className="bg-[#2D313A] h-6 w-6 flex p-2 justify-center items-center rounded-md" title="Previous">
                    <i className="bi bi-caret-left text-[#A8B3CF]"></i>
                </div>
                <div className="bg-[#2D313A] h-6 w-6 flex p-2 justify-center items-center rounded-md" title="Next">
                    <i className="bi bi-caret-right text-[#A8B3CF]"></i>
                </div>
            </div>
            <div>
                <div className="bg-[#2D313A] h-6 w-6 flex p-2 justify-center items-center rounded-md" title="Close">
                    <i className="bi bi-x text-[#A8B3CF]"></i>
                </div>
            </div>
        </div>
    )
}

export default F