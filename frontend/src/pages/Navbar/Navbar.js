import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Aena</div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/bank">Bank Detail</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <button className="get-started-btn">Get Started</button>
    </nav>
  );
};

export default Navbar;
