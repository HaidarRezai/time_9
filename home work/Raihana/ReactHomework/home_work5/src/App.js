import { SlArrowDown } from "react-icons/sl";
import { SiHostinger } from "react-icons/si";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import Head from "./head";
import Farbe from "./farben";
import Cart from "./popup";

function App() {

  const info = [
    {
      para_1: "How do I register the free domain included with annual hosting plans?",
      icon: <SlArrowDown />,
      para_2: `To activate the free 12-month domain name included with every annual managed WordPress, cloud hosting, or Website Builder plan, simply log in to your dashboard, click on the Claim domain button, find your perfect domain, and register it.`,
    },
    {
      para_1: "How do I activate the free SSL certificate?",
      icon: <SlArrowDown />,
      para_2: `You don’t need to do anything. We automatically set up your SSL certificate when you sign up, so you can sit back and relax, safe in the knowledge your site is secure.`,
    },
    {
      para_1: "Can I change my plan, if my circumstances change?",
      icon: <SlArrowDown />,
      para_2: `Yes, you can easily upgrade your plan if your circumstances change. Our scalable options allow you to seamlessly switch without any downtime.`,
    },
    {
      para_1: "Why do different plans cost different amounts?",
      icon: <SlArrowDown />,
      para_2: `Yes, you can easily upgrade your plan if your circumstances change. Our scalable options allow you to seamlessly switch without any downtime.`,
    },
    {
      para_1: "Does Hostinger offer ecommerce hosting?",
      icon: <SlArrowDown />,
      para_2: `Yes, you can easily upgrade your plan if your circumstances change. Our scalable options allow you to seamlessly switch without any downtime.`,
    },
    {
      para_1: "I have a domain name at a different company. Can I transfer it to Hostinger?",
      icon: <SlArrowDown />,
      para_2: `Yes, you can easily upgrade your plan if your circumstances change. Our scalable options allow you to seamlessly switch without any downtime.`,
    },
    {
      para_1: "I'm a professional web developer, which is better for me, web hosting, Cloud hosting, or VPS hosting?",
      icon: <SlArrowDown />,
      para_2: `Yes, you can easily upgrade your plan if your circumstances change. Our scalable options allow you to seamlessly switch without any downtime.`,
    },
    {
      para_1: "Can I build a website on WordPress and host it with Hostinger?",
      icon: <SlArrowDown />,
      para_2: `Yes, you can easily upgrade your plan if your circumstances change. Our scalable options allow you to seamlessly switch without any downtime.`,
    },
  ]

  let [schow, setSchow] = useState(false) // gehört zu popup menu
  const [open, setOpen] = useState(false); // Zustand für öffnen/schließen
  
  return (
    <>
      <div className="inset-0 h-auto">
        {/* Header */}
        <div className="w-full h-18 flex justify-between items-center px-4">
          <Head />
          {/* ghröt zu popup menu code  */}
          <div className="flex items-center gap-1">
            <p>English</p>
            <p className="border p-2 rounded-lg cursor-pointer hover:bg-[#F4F5FF]"onClick={() => setSchow(!schow)} >My account</p>
          </div>
          {
            (schow) && <Cart setSchow={setSchow} schow={schow} />
          }
        </div>
        {/* farbe seite  */}
        <Farbe />
        {/* card Boxs */}
        <div className="flex flex-col justify-center items-center mt-10 mb-30 gap-y-2">
          {info.map((i) => (
            <div className="border border-[#D5DFFF] w-[40%] p-4 bg-white rounded-lg shadow-[0_0_10px_#D5DFFF] hover:bg-[#F4F5FF]" onClick={() => setOpen(!open)}>
              <div className="flex justify-between" onClick={() => setOpen(!open)}>
                <p className="font-semibold">{i.para_1}</p>
                <SlArrowDown className={open ? "rotate-180" : ""} />
              </div>
              {open && <p className="mt-4">{i.para_2}</p>}
            </div>  
          ))}
        </div>
        {/* footer  */}
        <div className="bg-[#F4F5ff] mt-30 py-12 flex justify-center items-center gap-2 ">
          <span className="hover:underline decoration-[#8C85FF] hover:underline-offset-6 cursor-pointer"> Hostinger </span><SlArrowRight /> <span >Cloud-Hosting</span>
        </div>
      </div >
    </>
  );
}

export default App;