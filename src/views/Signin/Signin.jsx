import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css'; // make sure this path is correct

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      alert('No account found. Please sign up first.');
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert(`Welcome back, ${storedUser.username}!`);
    } else {
      alert('Invalid user.');
    }
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="overlay">
          <h2>A journey of a thousand miles begins with a single step.</h2>
        </div>
      </div>
      <div className="right-panel">
        {/* Exit button inside right panel */}
        <button onClick={handleExit} className="exit-btn">Exit</button>

        <h1><span>TRAVEL BLOGGER</span></h1>

        <form onSubmit={handleSignin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="fas fa-user icon"></i>
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fas fa-lock icon"></i>
          </div>

          <Link to="/forgot-password" className="forgot">Forgot Your Password?</Link>

          <button type="submit" className="btn">ENTER</button>
        </form>

        <p className="signup-link">
          Don’t have an account? <Link to="/Signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
