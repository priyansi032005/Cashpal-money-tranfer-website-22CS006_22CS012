import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us-container" id='aboutus'>
      <div className="about-us-image">
        <img src="https://www.bing.com/images/search?view=detailV2&ccid=05dIO5cm&id=B2BE5902B941FC39D4D5DB53A3A582D46135ABB4&thid=OIP.05dIO5cmRB9rXHyRqg1GDwHaFp&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f001%2f759%2f880%2flarge_2x%2fmoney-transfer-isometric-web-banner-vector.jpg&exph=1960&expw=2567&q=Money+Transfer+Banner&simid=608039749319857206&FORM=IRPRST&ck=E30E872A1C812E173C772D304CD12BD3&selectedIndex=15&itb=0" />
      </div>
      <div className="about-us-content">
        <h2>About us</h2>
        <h3>We provide all types of recharge services</h3>
        <p>
          Our mobile recharge either prepaid or postpaid is just a click away with AENA ENTERPRISE! AENA ENTERPRISE is your one-stop shop solution for online recharge.
        </p>
        <div className="service-point">
          <div className="icon">🔲</div>
          <p>
            Our specialty is to provide the recharge without Gmail, Facebook interface. AENA ENTERPRISE is one of the best recharge-level Multi Service Sites in India. AENA ENTERPRISE gives you multiple operator recharge in single balance. It means the retailer doesn't have to invest separately for each operator, hence saving the hassle of maintaining separate sims and mobiles for different operators.
          </p>
        </div>
        <div className="service-point">
          <div className="icon">🔲</div>
          <p>
            The recharge solutions have been developed and scrubbed to ensure availability at no extra cost to the end user so that the user can transact securely from any location at their convenience. We would like to take the opportunity to thank our patrons for helping us help them and essentially for shaping our growth.
          </p>
        </div>
        <div className="service-point">
          <div className="icon">🔲</div>
          <p>
            AENA ENTERPRISE Service came into existence as one of the fastest online mobile recharge service providers in India. We believe in providing quality services to our customers and are constantly working towards it. As a result, we are always one step ahead of our competitors and have been able to gain popularity among our users within such a short span of time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
