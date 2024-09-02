import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CashPal: Money Tranfer Website</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#Register">Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
