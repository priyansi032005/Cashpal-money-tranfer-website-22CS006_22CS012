import React from 'react';
import './UserNavbar.css';
import { FaHome, FaMobileAlt, FaExchangeAlt, FaUser, FaBox, FaCartPlus, FaUserCircle, FaChartPie } from 'react-icons/fa';

const UserNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-brand">CashPal</span>
        <div className="navbar-links">
          <button className="navbar-item active"><FaHome /> DashBoard</button>
          <button className="navbar-item"><FaMobileAlt /> Recharge</button>
          <button className="navbar-item"><FaExchangeAlt /> Money Transfer</button>
          <button className="navbar-item"><FaUser /> AePS</button>
          <button className="navbar-item"><FaBox /> Payment</button>
          <button className="navbar-item"><FaCartPlus /> Account</button>
          <button className="navbar-item"><FaUserCircle /> My Profile</button>
          <button className="navbar-item"><FaChartPie /> Reports</button>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-balance">
          <span>OS:: ₹0.0000</span>
          <span>Balance: ₹0.4898</span>
        </div>
        <div className="navbar-icons">
          
          <span className="settings-icon">⚙️</span>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
