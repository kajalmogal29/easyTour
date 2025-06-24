import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <>
    <div className="header">
        <div className='tour'> <i className="ri-road-map-line"></i> easyTour</div>
        <div className="child1"><a href='home.jsx'>Home</a></div>
        <div className="child1"><a>Packages</a></div>
        <div className="child1"><a>Contact</a></div>
        <div className="child1"><a>About Us</a></div>
        <div className="child1"><a>Login</a></div>
    </div>
    </>
  )
}

export default Navbar