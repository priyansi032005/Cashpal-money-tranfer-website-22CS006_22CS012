import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <div className="service">
        <h3>Recharge</h3>
        <p>API User and Retailers can recharge any mobile, data card, etc.</p>
      </div>
      <div className="service">
        <h3>Utility</h3>
        <p>With recharge services, you can pay all other utility bills.</p>
      </div>
      <div className="service">
        <h3>DMR</h3>
        <p>We provide All India Domestic Money Transfer Services.</p>
      </div>
      {/* Add more service cards as needed */}
    </section>
  );
}

export default Services;
