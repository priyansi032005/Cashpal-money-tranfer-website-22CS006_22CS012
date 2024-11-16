import React, { useState, useRef, useEffect } from "react";
import { Search, User, LogOut, Settings, UserCircle } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">CashPal: Money Transfer Website</div>

      <ul className="navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#community">About</a>
        </li>
        <li>
          <a href="#news">Services</a>
        </li>
        <li>
          <a href="#events">Bank Details</a>
        </li>
        <li>
          <a href="#pda">Contact</a>
        </li>
        <li>
          <a href="/help">Policy</a>
        </li>

        <li className="navbar-icon">
          <Search onClick={() => setIsSearchOpen(!isSearchOpen)} />
        </li>

        <li className="navbar-icon" ref={profileRef}>
          <User onClick={() => setIsProfileOpen(!isProfileOpen)} />

          {isProfileOpen && (
            <div className="profile-popup">
              <div className="profile-info">
                <p className="profile-name">John Doe</p>
                <p className="profile-email">john.doe@example.com</p>
              </div>

              <a href="/profile" className="profile-menu-item">
                <UserCircle />
                Your Profile
              </a>

              <a href="/settings" className="profile-menu-item">
                <Settings />
                Settings
              </a>

              <a href="/logout" className="profile-menu-item danger">
                <LogOut />
                Sign out
              </a>
            </div>
          )}
        </li>
      </ul>

      {isSearchOpen && (
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            autoFocus
          />
          <button className="search-button">
            <Search />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
