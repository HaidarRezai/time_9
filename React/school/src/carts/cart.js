import A from "./a";
import B from "./b";
import C from "./c";
import D from "./d";
import E from "./e";
import F from "./f";
function Cart() {
    return (
        <div className="w-[70%] max-md:w-[100%] h-[50%] bg-black text-white m-auto rounded-2xl border border-2xl border-white overflow-hidden">
            <F />
            <div className="p-4 max-md:p-0 grid grid-cols-[74%_auto] max-md:grid-cols-1 gap-6">
                <div className="p-4">
                    <A />
                    <p>Motia is trending on GitHub</p>
                    <div className="border border-[#2D323B] rounded-2xl  my-4 p-2 text-[#CFD6E6]">
                        <B />
                        <C />
                    </div>
                </div>
                <D />
                <E />
            </div>
        </div>
    )
}

export default Cart;