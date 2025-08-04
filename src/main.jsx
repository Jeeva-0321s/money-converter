import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Useref from './Useref.jsx'
// import Use from './Use'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
     {/* <Useref />  */}
    {/* <Use /> */}
  </StrictMode>,
)
