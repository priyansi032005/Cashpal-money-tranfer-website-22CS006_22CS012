import React, { useState } from "react";
import "./Signup.css"; // Ensure correct path to your CSS file.
import main from "../../src/images/img-3.jpg";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    pinCode: "",
    referralCode: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Add form submission functionality here.
  };

  return (
    <div className="register-container">
      {/* Left side image */}
      <div className="image-section">
        <img src={main} alt="Left Side" className="register-image" />
      </div>

      {/* Right side form */}
      <div className="form-section">
        <h2>Get started with Us</h2>
        <p>Register a new membership</p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="User Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-Mail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pinCode">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Pin Code"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="referralCode">Referral Code</label>
            <input
              type="text"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              placeholder="Referral Code"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />
          </div>

          <Link to="/login">
            <button type="submit" className="save-btn">
              Sign Up
            </button>
          </Link>
        </form>

        <div className="register-footer">
          <p>
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
