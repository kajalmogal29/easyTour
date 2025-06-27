import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // To redirect after signup

  const handleSignup = (e) => {
    e.preventDefault();

    const user = { email, username, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Signup successful! Redirecting to Sign In...');
    setEmail('');
    setUsername('');
    setPassword('');
    navigate('/signin'); // redirect to signin page
  };

  return (
    <div className="container">
      <div className="left">
        <div className="text-container">
          <h2>The world is waiting<br />let us help you explore it.</h2>
        </div>
      </div>
      <div className="right">
        <div className="form-header">
          <p className="already-member">
            Already a member? <Link to="/signin">Sign in</Link>
          </p>
          <h3>CREATE YOUR ACCOUNT</h3>
        </div>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
