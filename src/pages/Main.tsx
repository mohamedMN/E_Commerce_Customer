// Import necessary dependencies and components
import React from "react";
import Navbar from "../components/Navbar"; // Import your Navbar component
import HeroSectionContainer from "../components/HeroSection"; // Import your HeroSectionContainer component
import Footer from "../components/Footer"; // Import your Footer component

// Main component
const Main: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      {/* <Header /> */}

      {/* Hero Section Container */}
      <HeroSectionContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
