import React from "react";
import "./Recharge.css";

const Recharge = () => {
  return (
    <div className="recharge-container">
      <header className="recharge-header">
        <h1>Broad Band</h1>
        <nav className="breadcrumb">
          <span>Home</span> &gt; <span>Recharge</span> &gt; <span>Broad Band</span>
        </nav>
      </header>

      <div className="recharge-tabs">
        <button className="tab-button active">Recharge</button>
        <button className="tab-button">DTH</button>
        <button className="tab-button">PostPaid</button>
        <button className="tab-button">Electricity</button>
        <button className="tab-button">Gas</button>
        <button className="tab-button">Water</button>
        <button className="tab-button">Insurance</button>
        <button className="tab-button">BroadBand</button>
      </div>

      <div className="recharge-content">
        <div className="recharge-form">
          <select className="service-select">
            <option>:: Select Service ::</option>
            <option>Mobile</option>
            <option>DTH</option>
            <option>BroadBand</option>
          </select>
          <input
            type="text"
            placeholder="Mobile No"
            className="input-field"
          />
          <input type="number" placeholder="Amount" className="input-field" />
          <button className="btn recharge-button">Proceed To Recharge</button>
          <button className="btn browse-button">Proceed To Browse Plan</button>
        </div>
        <div className="recharge-offer">
          <h3>R-Offer and Browse plan</h3>
          <div className="offer-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
