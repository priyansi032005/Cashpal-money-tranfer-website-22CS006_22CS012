import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card success">
          <h3>SUCCESS TRANSACTION</h3>
          <p>Today Transactions</p>
          <h2>0 | 0</h2>
          <p className="last24">from last 24 hours</p>
          <a href="/pending-transaction">View</a>
        </div>

        <div className="card failed">
          <h3>FAILED TRANSACTION</h3>
          <p>Today Transactions</p>
          <h2>0 | 0</h2>
          <p className="last24">from last 24 hours</p>
          <a href="/pending-transaction">View</a>
        </div>

        <div className="card pending">
          <h3>PENDING TRANSACTION</h3>
          <p>Today Transactions</p>
          <h2>0 | 0</h2>
          <p className="last24">from last 24 hours</p>
          <a href="/pending-transaction">View</a>
        </div>

        <div className="card total">
          <h3>TOTAL TRANSACTION</h3>
          <p>Today Transactions</p>
          <h2>0 | 0</h2>
          <p className="last24">from last 24 hours</p>
          <a href="/pending-transaction">View</a>
        </div>
      </div>

      <div className="details-row">
        <div className="detail-box">
          <div className="detail-header">
            <h4>Today's Sales And Profit Details</h4>
            <div className="icons">
              <i className="fas fa-expand"></i>
              <i className="fas fa-chevron-up"></i>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <p>Today's Sales And Profit Details</p>
          <span>•</span>
        </div>
        <div className="detail-box">
          <div className="detail-header">
            <h4>Today's Sales And Profit Details</h4>
            <div className="icons">
              <i className="fas fa-expand"></i>
              <i className="fas fa-chevron-up"></i>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <p>Today's Sales And Profit Details</p>
          <span>•</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
