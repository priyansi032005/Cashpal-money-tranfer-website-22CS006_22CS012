import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login/Login";
import News from "./Components/News/News";
import Aboutus from "./Components/Aboutus/Aboutus";
import Contactus from "./Components/Contactus/Contactus";
import Help from "./Components/Help/Help";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage";

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
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contactus" element={<Contactus /> }/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
