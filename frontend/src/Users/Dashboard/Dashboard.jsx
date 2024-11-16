import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card success">
          <h3>SUCCESS TRANSACTION</h3>
          <p>Today Transactions</p>
          <h2>0|0</h2>
          <p className="last24">from last 24 hours</p>
          <button>View</button>
        </div>

        <div className="card failed">
          <h3>FAILED TRANSACTION</h3>
          <p>Today Transactions</p>
          <h2>0|0</h2>
          <p className="last24">from last 24 hours</p>
          <button>View</button>
        </div>

        <div className="card pending">
          <h3>PENDING TRANSACTION</h3>
          <p>Today Transactions</p>
          <h2>0|0</h2>
          <p className="last24">from last 24 hours</p>
          <button>View</button>
        </div>

        <div className="card total">
          <h3>TOTAL TRANSACTION</h3>
          <p>Today Transactions</p>
          <h2>0|0</h2>
          <p className="last24">from last 24 hours</p>
          <button>View</button>
        </div>
      </div>

      <div className="details">
        <div className="detail-box">
          <h4>Today's Sales And Profit Details</h4>
          <p>Today's Sales And Profit Details</p>
          <span>•</span>
        </div>

        <div className="detail-box">
          <h4>Weekly Sale</h4>
          <p>Weekly Sale</p>
          <span>•</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
