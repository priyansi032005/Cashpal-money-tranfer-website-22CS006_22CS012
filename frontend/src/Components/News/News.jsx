import React, { useState, useEffect } from "react";
import "./News.css";

const slides = [
  {
    title: "Fast and Secure Transfers",
    description:
      "Send money internationally in seconds with top-level encryption.",
    image:"https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg", // Replace with relevant image URLs
  },
  {
    title: "Lowest Transaction Fees",
    description: "Save on every transfer with competitive low fees.",
    image: "https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg",
  },
  {
    title: "24/7 Customer Support",
    description: "We’re here to help you anytime, anywhere.",
    image: "https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg",
  },
  {
    title: "Trusted by Millions Worldwide",
    description: "Join a network of satisfied customers around the globe.",
    image: "https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg",
  },
];

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to go to a specific slide manually
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="news-slider">
      <div
        className="news-slide"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="slide-content">
          <h2 className="slide-title">{slides[currentSlide].title}</h2>
          <p className="slide-description">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>
      <div className="slider-navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
