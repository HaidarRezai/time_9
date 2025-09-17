import { FaPlus } from "react-icons/fa";
function Shop(props) {
    return (
        <div className="">
            <div className="relative ">
                <h3 className="absolute top-2 right-4 bg-red-600 text-white px-2 py-1 rounded-lg text-sm font-bold">
                    {props.data.off}%
                </h3>
                <img src={props.data.img} className="w-[388px] h-[388px] rounded-[32px] object-cover " />
                <h3 className="bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent text-2xl font-bold mt-2">
                    {props.data.type}
                </h3>
                <h1 className="font-bold text-[22px]">{props.data.info}</h1>
                <p className="text-[#877B7B]">{props.data.des}</p>
                <h1 className="font-black text-2xl mt-2">{props.data.off == 100 ?  <span className="text-green-600">Free</span> :(props.data.priceBefore - (props.data.priceBefore * props.data.off / 100)).toFixed(2)+ "$"} <span className="text-lg font-thin line-through">{props.data.priceBefore}$</span></h1>
                <button className="w-full bg-black text-white mt-6 p-2 rounded-lg text-2xl flex items-center justify-center cursor-pointer"><FaPlus className="mr-2" />{props.data.btn}</button>
            </div>
        </div>
    )
}
export default Shop;