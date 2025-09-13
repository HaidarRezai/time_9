import { SlArrowDown } from "react-icons/sl";
import { SiHostinger } from "react-icons/si";

function Head() {
    return (
        <>
            <div className="flex items-center gap-1">
                <SiHostinger className="text-3xl text-[#261559]" />
                <p>HOSTINGER </p>
            </div>

            <ul className="flex gap-6 ml-6 items-center cursor-pointer">
                <li className="hover:underline decoration-[#8C85FF] hover:underline-offset-6">Pricing</li>

                <li className="flex items-center gap-1 hover:underline decoration-[#8C85FF] hover:underline-offset-6">
                    Service <SlArrowDown className="transition-transform duration-300 hover:rotate-180" />
                </li>

                <li className="flex items-center gap-1 hover:underline decoration-[#8C85FF] hover:underline-offset-6">
                    Explore <SlArrowDown className="transition-transform duration-300 hover:rotate-180" />
                </li>

                <li className="flex items-center gap-1 hover:underline decoration-[#8C85FF] hover:underline-offset-6">
                    Support <SlArrowDown className="transition-transform duration-300 hover:rotate-180" />
                </li>

                <li className="hover:underline decoration-[#8C85FF] hover:underline-offset-6">Self-hosted n8n</li>
            </ul>
        </>
    )
}

export default Head;