import React from 'react'
import './App.css';
import Home from './views/Home/Home';
import Signin from './views/Signin/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
     <>
   <Home/>
      <Signin/>
     </>
  )
}

export default App