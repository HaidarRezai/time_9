// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  let [number, setNumber] = useState()
  let [test, setTest] = useState()
  let [chekbox, setChekbox] = useState(false)

  function allDate(even) {
    even.preventDefault();
    console.log(number)
    console.log(chekbox)
    console.log(test)


  }
  return (
    <div className="border mt-80 ml-100 border w-100 h-100 ">
      <form onSubmit={allDate} className='grid grid-cols-1 gap-2 p-1' >
        <p>{number}</p>
        <p>{test}</p>

        <p>{(chekbox) ? "true" : false}</p>

        <input
          type="number" placeholder=''
          name='number'
          className='border p-1'
          onChange={(e) => setNumber(e.target.value
          )}></input>



        <input type="text"
          name='test'
          onClick={(e) => setTest(e.value)}
          placeholder='Name'
          className='border p-1'></input>



        <input type="checkbox"
          value={false}
          name='bolean'
          placeholder='Name'
          className='border p-1'
          onClick={(e) => setChekbox(!e.value)}></input>

        <input type='submit' className='border bg-sky-100'></input>
      </form>
    </div>
  );
}

export default App;
