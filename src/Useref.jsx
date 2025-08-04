import React, { useEffect,useRef, useState } from 'react'
import './ref.css'


function Useref() {

const [count,setcount]=useState(0);
const ref=useRef(null);

useEffect(()=>{
    ref.current=count;
}
);


  return (
    <div className='container'>
        <h1 style={{textDecoration:'underline'}}>Example for useRef</h1>
        <h2>Current Count:{count}</h2>
        <h3>Previous Count:{ref.current}</h3>
        <button onClick={()=>setcount(count+1)}>Increase</button>
    </div>
  )
}

export default Useref