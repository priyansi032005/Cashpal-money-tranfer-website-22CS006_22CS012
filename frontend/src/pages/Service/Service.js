import React from 'react';
import './Service.css';

const servicesData = [
  {
    id: 1,
    name: 'AIRTEL',
    description: 'In Airtel User Can Check Best Offer And Make Recharge A Single Click',
    logo: 'airtel-logo-url', 
  },
  {
    id: 2,
    name: 'IDEA',
    description: 'In Idea User Can Check Best Offer And Make Recharge A Single Click',
    logo: 'idea-logo-url', 
  },
  {
    id: 3,
    name: 'VODAFONE',
    description: 'In Vodafone User Can Check Best Offer And Make Recharge A Single Click',
    logo: 'vodafone-logo-url', 
  },
  {
    id: 4,
    name: 'JIO',
    description: 'In Jio User Can Check Best Offer And Make Recharge A Single Click',
    logo: 'jio-logo-url', 
  },
  {
    id: 5,
    name: 'BSNL',
    description: 'In BSNL User Can Check Best Offer And Make Recharge A Single Click',
    logo: 'bsnl-logo-url', 
  },
  {
    id: 6,
    name: 'AIRTELDTH',
    description: 'In AirtelDTH User Can Check Best Plan And Customer Info And Make Recharge A Single Click',
    logo: 'airteldth-logo-url', 
  },
];

const Services = () => {
  return (
    <div className="services-container" id='service'>
      <h2 className="services-title">Services</h2>
      <p className="services-subtitle">We Provide Multiple Services Like AePS, DMT/DMR, Utility Bill Payment, Mobile & DTH Recharge Services.</p>
      <div className="services-grid">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-logo">
              <img src={service.logo} alt={service.name} />
            </div>
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
