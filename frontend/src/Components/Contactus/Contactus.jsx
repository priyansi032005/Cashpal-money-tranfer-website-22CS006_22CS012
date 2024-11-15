import React from 'react';
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <section className="contact-us">
            <div className="contact-us-container">
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need assistance, feel free to reach out to us through the form below or our contact details.</p>
                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <p>123 MoneyTransfer Street, Financial City, Country</p>
                    </div>
                    <div className="info-item">
                        <FaPhone className="info-icon" />
                        <p>+1 (234) 567-890</p>
                    </div>
                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <p>support@moneytransfer.com</p>
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
