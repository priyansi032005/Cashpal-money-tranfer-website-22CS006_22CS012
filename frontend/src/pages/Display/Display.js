import React, { useState } from "react";
import "./Display.css";
import main from "../../images/main.jpg";

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="slider-container">
      <div className="slider-image">
        <img src={main} />
      </div>
    </div>
  );
};

export default Slider;
