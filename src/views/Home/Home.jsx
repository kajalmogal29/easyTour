import React from 'react'
import "./home.css"
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../assets/img1.jpg'
 

const Home = () => {
  return (
    <>
    <div>
    <Navbar/>
    <div className='main-container'>
     <img src={img1}></img>
    </div>
    
   <div className='sub-container'>
    <h1><i class="ri-red-packet-line"></i>OUR PACKAGES</h1>
   </div>
   </div>
    </>
  )
}

export default Home