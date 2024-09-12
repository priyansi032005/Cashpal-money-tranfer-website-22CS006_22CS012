// import React from 'react'

// const Signup = () => {
//   return (
//     <div>
//       <h1>Signup</h1>
//     </div>
//   )
// }

// export default Signup

import React from "react";
import "./Signup.css"; // Import your CSS file for styling

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Get started with Us</h1>
        <p>Register a new membership</p>

        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i> User Name
            </label>
            <input type="text" id="username" placeholder="User Name" />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="text" id="mobile" placeholder="Mobile Number" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="E-Mail" />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">PinCode</label>
            <input type="text" id="pincode" placeholder="Pin Code" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Address" />
          </div>
          <button className="save-btn" type="submit">
            Save
          </button>
        </form>
        <p className="signin-link">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
