import Cart1 from "./cart1";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  let [info_data, setInfo] = useState([
    {
      items: "Item 1",
      head: "Hello React",
      para: "Peaceful landscape with trees and mountains.",
      img: "https://c.wallhere.com/photos/3d/75/nature_landscape_trees_dirt_road_fall_cabin_mountains_leaves-1960735.jpg!d",
      link: "This a Link",
      btn: "Click",
    },
    {
      items: "Item 2",
      head: "Second Card",
      para: "Calm lake with a reflection of the sky.",
      img: "https://tse2.mm.bing.net/th/id/OIP.ud7Drd8vo4V3dFLCGvBuDwHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "Another Link",
      btn: "Open",
    },
    {
      items: "Item 3",
      head: "Third Card",
      para: "A bright forest with sunlight through the trees.",
      img: "https://tse4.mm.bing.net/th/id/OIP.p6KC2MlPrOZKYXj7dshjVgHaDQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "Read more",
      btn: "Start",
    },
  ])
  return (
    <div className="flex justify-center items-center">
      <Cart1>
        <ul className="flex justify-between items-center p-2 bg-indigo-200 font-bold rounded-lg text-indigo-900 shadow-lg">
          {
            info_data.map((i) => (
              <li className="cursor-pointer" onClick={() => setCount(i.items - 1)}>{i.items}</li>
            ))
          }
        </ul>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold">{info_data[count].head} {count}</h1>
          <p className="text-center text-sm text-gray-800">{info_data[count].para} </p>
          <img src={info_data[count].img} alt="nature" className="w-[300px] h-[200px] rounded-2xl object-cover shadow-lg mt-2" />
          <a href="#" className="text-indigo-800 text-lg font-bold  no-underline hover:underline mt-2">{info_data[count].link}</a>
          <button className="w-full py-1 rounded-lg bg-indigo-200 text-indigo-900 font-bold text-2xl mt-2 cursor-pointer hover:bg-indigo-300 shadow-lg">{info_data[count].btn}</button>

        </div>
      </Cart1>
    </div>
  );
}
export default App;