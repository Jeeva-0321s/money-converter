import React, {  useRef, useState } from 'react'
import './use.css'

function Use() {
const[count,setcount]=useState(0)
const timer=useRef(null);

const starttime=() => {
    if (!timer.current) {
      timer.current = setInterval(() =>{
        setcount((prev)=>prev+1);
      },1000
    ) ;
      
    }
};

const stoptime=() => {
  clearInterval(timer.current);
  timer.current=null;
  alert(`Timer stopped at:${count} seconds.`)
}


  return (
    <div className='container'>
      <h1 style={{textDecoration:'underline',color:'lightgray'}}>Example for useRef</h1>
      <h1>Timer: {count}</h1>
      <button onClick={starttime}>Start</button>
      <button onClick={stoptime}>Stop</button>
    </div>
  )
}

export default Use