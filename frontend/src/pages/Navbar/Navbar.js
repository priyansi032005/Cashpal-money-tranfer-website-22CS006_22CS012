import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Aena</div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="#aboutus">About</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#bank">Bank Detail</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <Link to="/signup" className="get-started-btn">Get Started</Link>
    </nav>
  );
};

export default Navbar;
