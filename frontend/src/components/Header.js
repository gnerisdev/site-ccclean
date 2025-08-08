import React from "react";
import "../styles/Header.css";

const Header = () => {
  const navigationItems = [
    "CLEAN",
    "Quem somos",
    "Missão e valores", 
    "Diaristas",
    "Mensalistas",
    "Avaliações"
  ];

  return (
    <header className="header">
      <div className="header-content">
        <nav className="navigation">
          {navigationItems.map((item, index) => (
            <a key={index} href="#" className="nav-item">
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="header-line"></div>
    </header>
  );
};

export default Header;