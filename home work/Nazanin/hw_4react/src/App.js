

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const info = [
  {
    head: "This a new programm",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    head: "This is a alte propgram",
    para: "amet consectetur adipisicing elit Lorem ipsum dolor sit Lorem ipsum dolor sit .",
  },
  {
    head: "Thais is the beste plan",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.t consectetur adipisicing elit",
  },
  {
    head: "Thais is a new gatagory",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.t consectetur adipisicing elit",
  },
];

function Prop() {
  const [openIndex, setOpenIndex] = useState(true);
  const toggeltext = () => {
    setOpenIndex(!openIndex)
  }

  return (

    <div className="p-6 space-y-3 ml-150 " >
      {info.map((i) => (
        <div className="border border-indigo-400 p-3 rounded w-100 bg-indigo-100 hover:bg-indigo-200 ">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">{i.head}</h2>
            <IoIosArrowDown className="cursor-pointer transition-transform duration-300 " onClick={toggeltext} />
          </div>
          {openIndex && (<p className="text-sm text-gray-600 mt-1">{i.para}</p>)}
        </div>
      ))}
    </div>
  );
}
export default Prop;



