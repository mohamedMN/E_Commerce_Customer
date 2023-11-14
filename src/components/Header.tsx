// Header.tsx
import React from "react";
import Navbar from "./Navbar"; // Assuming you have a Navbar component

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        {/* You can customize the logo or app name */}
        <div className="logo">Your Logo</div>

        {/* Include your Navbar component */}
        <Navbar />

        {/* You can add additional elements to the header */}
        {/* For example, user profile, search bar, etc. */}
      </div>
    </header>
  );
};

export default Header;
