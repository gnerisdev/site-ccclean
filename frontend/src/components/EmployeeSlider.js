import React, { useState, useEffect } from "react";
import { mockEmployees } from "../data/mockData";
import "../styles/EmployeeSlider.css";

const EmployeeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockEmployees.length);
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? mockEmployees.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % mockEmployees.length);
  };

  return (
    <div className="employee-slider">
      <div className="slider-container">
        <button className="slider-nav prev" onClick={goToPrevious}>
          ‹
        </button>
        
        <div className="slider-wrapper">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {mockEmployees.map((employee, index) => (
              <div key={index} className="slide">
                <img 
                  src={employee.image} 
                  alt={employee.name}
                  className="employee-image"
                />
                <div className="employee-info">
                  <h3>{employee.name}</h3>
                  <p>{employee.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="slider-nav next" onClick={goToNext}>
          ›
        </button>
      </div>
      
      <div className="slider-indicators">
        {mockEmployees.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default EmployeeSlider;