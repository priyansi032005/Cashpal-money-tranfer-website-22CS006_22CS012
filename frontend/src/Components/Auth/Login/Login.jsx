import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios"; // Import axios
import "./Login.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  // Handle Login submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        {
          withCredentials: true,
        }
      );
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  // Handle Signup submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const { email, password, name } = formData;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        { email, password, name }
      );
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle Google Authentication (stub for now)
  const handleGoogleAuth = () => {
    console.log("Google auth initiated");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <p>Welcome to CashPal</p>
        </div>

        <form
          onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}
          className="auth-form"
        >
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {isLogin && (
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleAuth}
          >
            <FcGoogle className="google-icon" />
            Continue with Google
          </button>

          <div className="auth-switch">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="switch-btn"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
