import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;