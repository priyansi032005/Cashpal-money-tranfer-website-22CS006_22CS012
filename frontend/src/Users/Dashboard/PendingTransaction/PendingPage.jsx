import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./PendingPage.css";
import UserNavbar from "../../Navbar/UserNavbar";

const PendingPage = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [status, setStatus] = useState("All");
  const [service, setService] = useState("All");
  const [transactionType, setTransactionType] = useState("All");

  const handleSearch = () => {

    console.log({
      fromDate,
      toDate,
      status,
      service,
      transactionType,
    });
  };

  return (
    <>
      <UserNavbar/>
      <div className="pending-page">
        <div className="header">
          <h2>Datewise Transaction</h2>
          <p className="breadcrumb">
            <span>
              <AiOutlineHome className="breadcrumb-icon" />
            </span>{" "}
            - <span>Reports</span> - Datewise Transaction
          </p>
        </div>
        <div className="filters">
          <div className="filter-group">
            <label>From Date *</label>
            <input
              type="datetime-local"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <label>To Date *</label>
            <input
              type="datetime-local"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="All">:: All ::</option>
              <option value="Success">Success</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Transfer">Transfer</option>
              <option value="Payment">Payment</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Transaction Type</label>
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </div>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="transaction-list">
          <h3>Datewise Transaction List</h3>
          <div className="empty-list">No transactions to display</div>
        </div>
      </div>
    </>
  );
};

export default PendingPage;
