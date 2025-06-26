import React from 'react'
import "./App.css"
import { BrowserRouter , Routes, Route  } from 'react-router-dom'
import Home from './views/Home/Home.jsx'
import About from './views/About/About.jsx'
import Signin from './views/Signin/Signin.jsx'
import Signup from './views/Signup/Signup.jsx'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Signin' element={<Signin/>} />
        <Route path='/Signup' element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App