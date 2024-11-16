import React from "react";
import UserNavbar from "../Users/Navbar/UserNavbar";
import Footer from "./Footer/Footer";
import Dashboard from "../Users/Dashboard/Dashboard";

const UserHomePage = () => {
  return (
    <div>
      <UserNavbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default UserHomePage;
