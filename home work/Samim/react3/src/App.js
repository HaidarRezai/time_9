import logo from './logo.svg';
import './App.css';
import Para from './carts';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState(1);
  let [info, setInfo] = useState([
    {
      id: 1,
      name: "khan",
      postion: "DH",
      salary: 1000,
      img: "public/logo192.png"
    },

    {
      id: 2,
      name: "hamed",
      postion: "DR",
      salary: 3000,
    },
    {
      id: 3,
      name: "ahmad",
      postion: "IT",
      salary: 3500,
    },

  ])
  return (
    <div className="App">
      <Para>
        <div className="bg-gray-300  rounded-lg p-3">
          <ul className="flex gap-20 p-4 text-bold text-2xl">
            {
              info.map((i) => (
                <li className='cursor-pointer' onClick={() => setcount(count + 1)}>{i.id}</li>

              ))
            }

          </ul>
        </div>
        <div className='text-2xl'>
          <h1 className='text-green-900'> {info[count].id}{count.id}Nummber</h1>
          <p>{info[count].salary}</p>
          <p>{info[count].postion}</p>
        </div>
        <img src="harat1.webp" className='inline-block rounded-lg p-5'></img>
      </Para>
    </div>
  );
}

export default App;
