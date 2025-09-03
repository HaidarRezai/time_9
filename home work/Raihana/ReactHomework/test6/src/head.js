function Head() {
    return (
        <header className="text-white text-2xl p-2 bg-[#1E202D] col-span-2 ">
            <div className="flex justify-between bg-[#1E202D] ">
                <div>
                    <i
                        className="bi bi-chevron-left text-[#868992] hover:bg-[#2D313A] hover:text-white rounded-lg px-1 cursor-pointer"></i>
                    <i
                        className="bi bi-chevron-right text-[#868992] hover:bg-[#2D313A] hover:text-white rounded-lg px-1 cursor-pointer"></i>
                </div>
                <div><i
                    className="bi bi-x text-[#868992] hover:bg-[#2D313A] hover:text-white rounded-lg px-1 cursor-pointer"></i>
                </div>
            </div>
        </header>
    )
}
export default Head;