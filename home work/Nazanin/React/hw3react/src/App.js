
import { useState } from "react";
import Cart from "./cart1";
function App() {
  const [count, setCount] = useState(0);

  let info = [
    {
      items: 1,
      heading: "First heading",
      para: "This a first paragraph",
      imge: "https://img.freepik.com/premium-photo/mountain-range-with-name-mountain_1085327-295.jpg",
    },
    {
      items: 2,
      heading: "Secound heading",
      para: "This a seacund pragraph",
      imge: "https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_947967-539.jpg?w=2000",
    },
    {
      items: 3,
      heading: "Thrith heading",
      para: "This a thirth pragraph",
      imge: "https://media.licdn.com/dms/image/C4E12AQFWYqVUY05BxA/article-cover_image-shrink_720_1280/0/1601374092313?e=2147483647&v=beta&t=JqSzKEYqNFVziA4pV0sMN1Va5yMKpV_tB4jl15MEnSc",
    },


  ]




  return (
    <div className="w-100 h-120 p-2 shadow-lg   m-auto mt-4">
      <Cart>
        <ul className="flex gap-10   shadow-lg bg-gray-200 p-3 rounded-full ">
          {
            info.map((i) => (
              <li className="cursor-pointer  p-2 rounded-4xl bg-gray-100 hover:bg-gray-600 hover:text-white" onClick={() => setCount(i.items - 1)}>{i.items} Items</li>

            ))
          }

        </ul>

        <h1 className="font-bold text-xl text-center mt-2">  {info[count].heading}</h1>
        <p className="text-center leading-7" >{info[count].para}</p>
        <img src={info[count].imge} className="w-100 h-60 mt-10 "></img>
        <button className=" w-96 mt-2   bg-sky-100 p-3 rounded-full"> Click </button>
      </Cart>

    </div>

  );
}

export default App;
