import React  from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

const ForgotPassword = () => {

  return (
    <div className="container">
      <div className="left-panel">
        <div className="overlay">
          <h2>Reset your password and continue your journey.</h2>
        </div>
      </div>
      <div className="right-panel">
        <h1><span>Forgot Password</span></h1>

        <form >
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              required
             
            />
            <i className="fas fa-envelope icon"></i>
          </div>
          <button type="submit" className="btn">Send Reset Link</button>
        </form>

        <p className="signup-link">
          Remembered your password? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
