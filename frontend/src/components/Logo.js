import React from "react";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
        <div className="drop drop-main"></div>
        <div className="drop drop-6"></div>
        <div className="drop drop-7"></div>
        <div className="drop drop-8"></div>
      </div>
      
      <div className="logo-text">
        <div className="logo-cc">CC</div>
        <div className="logo-clean">CLEAN</div>
      </div>
    </div>
  );
};

export default Logo;