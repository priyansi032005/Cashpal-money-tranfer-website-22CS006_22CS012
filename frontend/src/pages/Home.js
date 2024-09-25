import React from "react";
import Navbar from "./Navbar/Navbar";
import Headers from "./Header/Header";
import About from "./Aboutus/Aboutus";
import Services from "./Service/Service";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Display from "./Display/Display";

const Home = () => {
  const appStyles = {
    backgroundColor: "white",
    color: "black",
    minHeight: "100vh",
  };

  return (
    <div style={appStyles}>
      <Headers />
      <Navbar />
      <Display />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
