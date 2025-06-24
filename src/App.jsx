<<<<<<< HEAD
import React from 'react'
import "./app.css"
import Navbar from "./components/Navbar/Navbar"
import Home from "./views/Home/Home"
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './views/About/About.jsx'

function App() {
  const [count, setCount] = useState(0)
>>>>>>> 4b3374b7c48d061ea86276164c54747aec49d127

const App = () => {
  return (
    <>
<<<<<<< HEAD
     <Navbar/>
     <Home/>
=======
     <About/> 
   
      
>>>>>>> 4b3374b7c48d061ea86276164c54747aec49d127
    </>
  )
}

export default App