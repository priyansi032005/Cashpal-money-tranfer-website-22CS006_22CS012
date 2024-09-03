import React from 'react';
import './Banner.css';
import bannerImage from '../assets/banner-img.jpg';

const Banner = () => {
    return (
        <section className="banner">
            <img src={bannerImage} alt="Banner" />
            <div className="banner-text">
                <h1>Simple, Secure Fast Transfer</h1>
                <p>Utility Bill Payments</p>
            </div>
        </section>
    );
}

export default Banner;
