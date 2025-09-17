import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [number,setNumber]=useState()
  let [name,setName]=useState()
  let [check,setCheck]=useState(false)

  function jan(even){
    even.preventDefault()
    console.log(number)
    console.log(name)
    console.log(check)
  }
  return (
    <div className="App ">
      <div>
   <form onSubmit={jan} className='border bg-green-200 mt-40 text-2xl w-[70%]  gap-4 rounded-lg 
    m-auto h-full p-5 py-5 grid grid-cols-1  md:w-[20%] shadow-[0_35px_35px_rgba(20,3,2,0.25)]'>
    <p>{number}</p>
    <p>{name}</p>
    <p>{(check)?"true": "false"}</p>
<input type='number'name='number' className='border rounded-lg'
onChange={(e)=>setNumber(e.target.value )}
></input>

<input type='text'name='name' className='border rounded-lg'
onChange={(o)=>setName(o.target.value)}
></input>

<input type='checkbox' name='boolean' className='border rounded-lg'
onChange={(p)=>setCheck(!check)}
></input>
<input type='submit' value="save"className='border mb- rounded-lg bg-green-500'></input>

   </form>
   </div>
    </div>
  );
}

export default App;
