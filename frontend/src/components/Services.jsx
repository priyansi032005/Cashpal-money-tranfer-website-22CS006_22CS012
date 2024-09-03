import React from 'react';
import './Services.css';
// import serviceIcon1 from '../assets/service-icon1.png';
// import serviceIcon2 from '../assets/service-icon2.png';

const Services = () => {
    return (
        <section className="services">
            <div className="service">
                <img src={serviceIcon1} alt="Recharge" />
                <h3>Recharge</h3>
                <p>API User and Retailers</p>
            </div>
            <div className="service">
                <img src={serviceIcon2} alt="Utility" />
                <h3>Utility</h3>
                <p>With recharge services...</p>
            </div>
        </section>
    );
}

export default Services;
