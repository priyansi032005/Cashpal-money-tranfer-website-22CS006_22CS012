import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="contact-form-container" id="contact">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="cform-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cform-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cform-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cform-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-submit-button">
            Submit
          </button>
        </form>
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Contact us for questions, technical assistance, or collaboration
            opportunities via the contact information provided.
          </p>
          <ul>
            <li>
              <FaPhone /> +123-456-7890
            </li>
            <li>
              <FaEnvelope /> hello@reallygreatsite.com
            </li>
            <li>
              <FaMapMarkerAlt /> 123 Anywhere ST., Any City, 12345
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
