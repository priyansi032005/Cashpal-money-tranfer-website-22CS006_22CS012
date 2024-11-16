import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login/Login";
import News from "./Components/News/News";
import Aboutus from "./Components/Aboutus/Aboutus";
// import Contactus from "./Components/Contactus/Contactus";
import Help from "./Components/Help/Help";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage";
import UserNavbar from "./Users/Navbar/UserNavbar";
import UserHomePage from "./Components/UserHomePage";
import PendingPage from "./Users/Dashboard/PendingTransaction/PendingPage";
import Dashboard from "./Users/Dashboard/Dashboard";
import Recharge from "./Users/Recharge/Recharge/Recharge";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
     
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/news" element={<News />} />
          <Route path="/aboutus" element={<Aboutus />} />
    
          <Route path="/help" element={<Help />} />
          <Route path="/Footer" element={<Footer />} />
          
        </Routes>

        <Routes>
        <Route path="/usernavbar" element={<UserNavbar />} />
          <Route path="/userhome" element={<UserHomePage />} />
          <Route path="/pending-transaction" element={<PendingPage/>}/>
          <Route path="/dashuser" element={<Dashboard />} />
          <Route path="/recharge" element={<Recharge />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
