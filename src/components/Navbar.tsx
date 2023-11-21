// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import "../styles/navbar.css";
import logo from "../Assets/GoodiesLogo.svg";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";


const Navbar: React.FC = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };
  return (
    <nav>
      <div className="navbar-container">
        <Link to="/main" style={{
          display: "flex",
          alignItems: "center",
        }}>
          <img
            width={50}
            height={50}
            src={logo}
            alt="logo"
            style={{ fill: "black", cursor: "pointer" }}
          /><b>Goodies</b>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <form className="search-form">
        <div className="search-icons">
          <FaSearch onClick={toggleSearchInput} />
          <FaShoppingBag />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className={showSearchInput ? "active" : ""}
        />
      </form>
    </nav>
  );
};

export default Navbar;
