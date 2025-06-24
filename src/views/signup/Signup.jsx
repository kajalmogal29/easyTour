import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="text-container">
          <h2>
            The world is waiting<br />let us help you explore it.
          </h2>
        </div>
      </div>
      <div className="right">
        <div className="form-header">
         <p className="already-member">
            Already a member? <Link to="/signin">Sign in</Link>
          </p>
          <h3>CREATE YOUR ACCOUNT</h3>
        </div>
        <form className="signup-form">
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <p className="terms">
            Creating an account means you're okay with our
            <a href="#"> Terms and Conditions</a> and
            <a href="#"> Privacy Policy</a>.
          </p>
          <button type="submit">Sign Up</button>
        </form>
        <p className="footer-text">2025 © easyCode. All rights reserved</p>
      </div>
    </div>
  );
};

export default Signup;
