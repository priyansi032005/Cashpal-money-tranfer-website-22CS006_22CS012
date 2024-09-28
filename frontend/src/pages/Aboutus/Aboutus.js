import React from "react";
import "./Aboutus.css";
import main from "../../images/img2.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container" id="aboutus">
        <div className="about-us-image">
          <img src={main} />
        </div>
        <div className="about-us-content">
          <h1>
            <b>About us</b>
          </h1>
          <h3>We provide all types of recharge services</h3>
          <p>
            Our mobile recharge either prepaid or postpaid is just a click away
            with CashPal:Money Transfer Website! CashPal:Money Transfer Website
            is your one-stop shop solution for online recharge.
          </p>
          <div className="service-point">
            <div className="icon">🔲</div>
            <p>
              Our specialty is to provide the recharge without Gmail, Facebook
              interface. CashPal:Money Transfer Website is one of the best
              recharge-level Multi Service Sites in India. CashPal gives you
              multiple operator recharge in single balance. It means the
              retailer doesn't have to invest separately for each operator,
              hence saving the hassle of maintaining separate sims and mobiles
              for different operators.
            </p>
          </div>
          <div className="service-point">
            <div className="icon">🔲</div>
            <p>
              The recharge solutions have been developed and scrubbed to ensure
              availability at no extra cost to the end user so that the user can
              transact securely from any location at their convenience. We would
              like to take the opportunity to thank our patrons for helping us
              help them and essentially for shaping our growth.
            </p>
          </div>
          <div className="service-point">
            <div className="icon">🔲</div>
            <p>
              CashPal:Money Transfer Website Service came into existence as one
              of the fastest online mobile recharge service providers in India.
              We believe in providing quality services to our customers and are
              constantly working towards it. As a result, we are always one step
              ahead of our competitors and have been able to gain popularity
              among our users within such a short span of time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
