// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//     </div>
//   )
// }

import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in", { username, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Let's Get Started</h2>
        <p>Sign in to continue to Your Account.</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-section">
            <a href="#">Forgot Password?</a>
            <a href="#">Forgot Pin?</a>
          </div>
          <button type="submit" className="login-button">
            <a href="/">SIGN IN</a>
          </button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
