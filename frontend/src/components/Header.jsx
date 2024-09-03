import React from 'react';
import './Header.css';
// import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="CashPal" className="logo" />
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
