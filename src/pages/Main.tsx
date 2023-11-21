// Import necessary dependencies and components
import React from "react";
import Navbar from "../components/Navbar"; // Import your Navbar component
import HeroSectionContainer from "../components/HeroSection"; // Import your HeroSectionContainer component
import Footer from "../components/Footer"; // Import your Footer component
import Header from "../components/Header";
// Main component
const Main: React.FC = () => {
  return (
    <div>

      <Header/>
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      {/* <Header /> */}

      {/* Hero Section Container */}
      <HeroSectionContainer />

{      <Footer/>
}    
    </div>
  );
};

export default Main;
