import React from "react";
import "./AboutUs.css";
import { FaShieldAlt, FaGlobe } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us-image">
          <img
            src="https://media.istockphoto.com/id/1303206008/vector/creative-team-of-professionals-develops-idea-flat-2d-web-design.jpg?s=612x612&w=0&k=20&c=SQy6V8IvdFFKc7oDciho1vuyjAmkKdSBHgT72LjRurs="
            alt="About Us"
          />
        </div>
        <div className="about-us-content">
          <h2>Who Are We?</h2>
          <p>
            We help people transfer money across borders with ease and security.
            Our mission is to provide reliable and efficient money transfer
            solutions for individuals and businesses.
          </p>
          <p>
            With a global presence and state-of-the-art technology, we ensure
            secure, fast, and affordable transactions for our customers around
            the world.
          </p>
          <div className="about-us-features">
            <div className="feature">
              <FaShieldAlt className="feature-icon" />
              <h4>Secure Transfers</h4>
              <p>
                We prioritize security to protect your money and personal
                information.
              </p>
            </div>
            <div className="feature">
              <FaGlobe className="feature-icon" />
              <h4>Global Reach</h4>
              <p>
                Our services are accessible across multiple countries and
                currencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
