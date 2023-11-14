// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* Add more links as needed */}

        {/* You can also add login/logout logic based on user authentication */}
        {/* For example, display "Login" if the user is not logged in, and "Logout" if they are */}
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
