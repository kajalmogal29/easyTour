import React from 'react'
import "./home.css"
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/img1.jpg'
 

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='main-container'>
     <img src={img1}></img>
    </div>

    <div className='sub-container'>

    </div>
    </>
  )
}

export default Home