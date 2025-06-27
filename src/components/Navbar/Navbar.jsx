import React from 'react'
import "./navbar.css"


const Navbar = () => {
  return (
    <>
        <div class="header">
        <div className='tour'> <i class="ri-road-map-line"></i> easyTour</div>
        <div class="child1"><a>Home</a></div>
        <div class="child1"><a>Packages</a></div>
        <div class="child1"><a>About Us</a></div>
        <div class="child1"><a>Contact Us</a></div>
        <div class="child1"><a>Login</a></div>
    </div>
    </>
  )
}

export default Navbar