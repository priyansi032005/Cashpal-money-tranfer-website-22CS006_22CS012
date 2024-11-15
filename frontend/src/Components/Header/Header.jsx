import React from 'react';
import './header.css';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/login'); // Redirects to the login page
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="contact-info">
                    <FaEnvelope className="icon" />
                    <span>Email: info@cashpal.com</span>
                </div>
                <div className="phone-info">
                    <FaPhoneAlt className="icon" />
                    <span>9898919177</span>
                    <FaPhoneAlt className="icon" />
                    <span>9429922225</span>
                </div>
                <div className="working-hours">
                    <FaClock className="icon" />
                    <span>Monday-Sunday 8am - 9pm</span>
                </div>
                <button className="get-started-btn" onClick={handleGetStartedClick}>Get Started</button>
            </div>
        </header>
    );
}

export default Header;
