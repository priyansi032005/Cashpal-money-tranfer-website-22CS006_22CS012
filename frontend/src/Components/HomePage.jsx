import React from "react";
import Navbar from "./Navbar/Navbar";

import News from "./News/News";
import Aboutus from "./Aboutus/Aboutus";
import Contactus from "./Contactus/Contactus";
import Footer from "./Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <News />
      <Aboutus />
      < Contactus />
      <Footer />
    </div>
  );
};

export default HomePage;
