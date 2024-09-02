import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <h1>Simple, Secure, Fast Transfer</h1>
      <p>Utility Bill Payments</p>
      <div className="service-icons">
        {/* Add icons for services */}
        <img src="path-to-electricity-icon" alt="Electricity Bill" />
        <img src="path-to-mobile-recharge-icon" alt="Mobile Recharge" />
        {/* Add other service icons similarly */}
      </div>
    </div>
  );
}

export default Banner;
