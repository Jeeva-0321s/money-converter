import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {

const [amount,setamount]=useState(1);
const [from,setfrom]=useState("INR");
const [to,setto]=useState("USA");
const [exchange,setexchange]=useState(null);
const [result,setresult]=useState();

useEffect(()=>{
const getexchange= async () => {
  try{
    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
    const api=await axios.get(url);
    setexchange(api.data.rates[to]);
  }
  catch(error){
    console.error("Error:",error);
  }
};

getexchange();
},[from,to]);

useEffect(()=>{
  if(exchange != null){
    setresult((amount*exchange).toFixed(4));
  }
},[amount,exchange]);

const handleamountchange=(e)=>{
  const value=parseFloat(e.target.value);
  setamount(isNaN(value) ? 1 : value);

};

const handlefromchange=(e)=>{
  setfrom(e.target.value);
};
const handletochange=(e)=>{
  setto(e.target.value);
};


  return (
    <div className='container'>
      <div className="amt">
<h1>Currency Converter</h1>
<label htmlFor="amount">Amount:</label>
<input type="number" id="amount" value={amount} onChange={handleamountchange} />
    </div>
    <div className="currency">
      <label htmlFor="from">FromCurrency:</label>
      <select id="from" value={from} onChange={handlefromchange}>
      <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="JPY">JPY</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="MXN">MXN</option>
      </select>
    </div>
    <div className='tocun'>
      <label htmlFor="to">ToCurrency:</label>
      <select  id="to" value={to} onChange={handletochange}>
      <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="JPY">JPY</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="MXN">MXN</option>
      </select>
    </div>
    <div className="h2">
      <h2>Converted Currency: {result?result:"Wait...Fetching Data"}{to}</h2>
    </div>
    
    </div>

    
  )
}

export default App
