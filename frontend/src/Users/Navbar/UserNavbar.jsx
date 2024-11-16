import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./UserNavbar.css";
import {
  FaHome,
  FaMobileAlt,
  FaExchangeAlt,
  FaUser,
  FaBox,
  FaCartPlus,
  FaUserCircle,
  FaChartPie,
} from "react-icons/fa";

const UserNavbar = () => {
  const [activePage, setActivePage] = useState(null); // Track active button

  const handleDropdownToggle = (menu) => {
    setActivePage(menu); // Set the active menu
  };

  const handleMouseLeave = () => {
    setActivePage(null); // Close dropdown when mouse leaves
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-brand">CashPal</span>
        <div className="navbar-links">
          <div
            className="navbar-item-container"
            onMouseEnter={() => handleDropdownToggle("Dashboard")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`navbar-item ${
                activePage === "Dashboard" ? "active" : ""
              }`}
            >
              <FaHome /> Dashboard
            </button>
          </div>

          <div
            className="navbar-item-container"
            onMouseEnter={() => handleDropdownToggle("Recharge")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`navbar-item ${
                activePage === "Recharge" ? "active" : ""
              }`}
            >
              <FaMobileAlt /> Recharge
            </button>
            {activePage === "Recharge" && (
              <div className="dropdown-menu">
                <a href="/recharge">recharge</a>
                <Link to="/fastag">Fastag</Link>
              </div>
            )}
          </div>

          <div
            className="navbar-item-container"
            onMouseEnter={() => handleDropdownToggle("Money Transfer")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`navbar-item ${
                activePage === "Money Transfer" ? "active" : ""
              }`}
            >
              <FaExchangeAlt /> Money Transfer
            </button>
            {activePage === "Money Transfer" && (
              <div className="dropdown-menu">
                <Link to="/bank-transfer">DMR 1</Link>
                <Link to="/upi-transfer">DMR Transaction</Link>
              </div>
            )}
          </div>

          <div
            className="navbar-item-container"
            onMouseEnter={() => handleDropdownToggle("AePS")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`navbar-item ${activePage === "AePS" ? "active" : ""}`}
            >
              <FaUser /> AePS
            </button>
            {activePage === "AePS" && (
              <div className="dropdown-menu">
                <Link to="/balance-enquiry">AePS Transaction</Link>
              </div>
            )}
          </div>

          <div
            className="navbar-item-container"
            onMouseEnter={() => handleDropdownToggle("Payment")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`navbar-item ${
                activePage === "Payment" ? "active" : ""
              }`}
            >
              <FaBox /> Payment
            </button>
            {activePage === "Payment" && (
              <div className="dropdown-menu">
                <Link to="/credit">Credit</Link>
                <Link to="/debit">Debit</Link>
                <Link to="/payment-request">Payment Request</Link>
                <Link to="/my-voucher">My Voucher</Link>
                <Link to="/wallet-share">Wallet Share</Link>
              </div>
            )}
          </div>

          <div
            className="navbar-item-container"
            onMouseEnter={() => handleDropdownToggle("Account")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`navbar-item ${
                activePage === "Account" ? "active" : ""
              }`}
            >
              <FaCartPlus /> Account
            </button>
            {activePage === "Account" && (
              <div className="dropdown-menu">
                <Link to="/ledger">Ledger</Link>
                <Link to="/daybook">DayBook</Link>
              </div>
            )}
          </div>

          <div
            className="navbar-item-container"
            onMouseEnter={() => handleDropdownToggle("My Profile")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`navbar-item ${
                activePage === "My Profile" ? "active" : ""
              }`}
            >
              <FaUserCircle /> My Profile
            </button>
            {activePage === "My Profile" && (
              <div className="dropdown-menu">
                <Link to="/profile-details">Profile Details</Link>
                <Link to="/change-password">Change Password</Link>
                <Link to="/change-pin">Change PIN</Link>
                <Link to="/bank-info">Bank Info</Link>
                <Link to="/recharge-plan">Recharge Plan</Link>
                <Link to="/dmr-plan">DMR Plan</Link>
                <Link to="/utility-commission">Utility Commission</Link>
                <Link to="/profit-report">Date wise Profit</Link>
                <Link to="/virtual-account">Virtual Account Details</Link>
              </div>
            )}
          </div>

          <div
            className="navbar-item-container"
            onMouseEnter={() => handleDropdownToggle("Reports")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`navbar-item ${
                activePage === "Reports" ? "active" : ""
              }`}
            >
              <FaChartPie /> Reports
            </button>
            {activePage === "Reports" && (
              <div className="dropdown-menu">
                <Link to="/live-transaction">Live Transaction</Link>
                <Link to="/pending-transaction">Pending Transaction</Link>
                <Link to="/pending-bill">Pending Bill</Link>
                <Link to="/search-transaction">Search Transaction</Link>
                <Link to="/datewise-transaction">Datewise Transaction</Link>
                <Link to="/service-sales">Service Wise Sales</Link>
                <Link to="/complain-report">Complain Report</Link>
              </div>
            )}
          </div>
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
