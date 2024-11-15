import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <h3>Stay Updated</h3>
        <p>
          Subscribe to our newsletter for the latest stamp releases, collecting
          tips, and community events.
        </p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li>
              <a href="/forum">Forum</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/stamp-exchange">Stamp Exchange</a>
            </li>
          </ul>
        </div>
        <div className="footer-section connect">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
