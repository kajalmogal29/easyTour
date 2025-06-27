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

<<<<<<< HEAD
const App = () => {
    return (
=======
function App() {
  const [count, setCount] = useState(0)
>>>>>>> 4b3374b7c48d061ea86276164c54747aec49d127

const App = () => {
  return (
>>>>>>> e9a560cb21160e0b0f222d3b0ef1d848dbb3ed52
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