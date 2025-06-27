import React from 'react';
import './Signin.css'; 

import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome


const Signin = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="overlay">
          <h2>A journey of a thousand miles begins with a single step.</h2>
        </div>
      </div>
      <div className="right-panel">
        <h1><span>TRAVEL BLOGGER</span></h1>

        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
            <i className="fas fa-user icon"></i>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
            <i className="fas fa-eye-slash icon"></i>
          </div>
          <a href="#" className="forgot">Forgot Your Password?</a>
          <button type="submit" className="btn">ENTER</button>
        </form>

      </div>
      <p className="signup-link">Don’t have an account? <Link to="/">Sign up</Link></p>
    </div>
  );
};

export default  Signin ;
