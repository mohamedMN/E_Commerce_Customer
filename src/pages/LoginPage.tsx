// src/Login.tsx
import React, { useState } from "react";
import { axiosPrivateCustomer } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
// import { GoogleLogin } from "@react-oauth/google";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log("data", data);

    try {
      const response = await axiosPrivateCustomer.post("/login", data);
      console.log("Login successful");
      e.preventDefault();
      console.log("User:", response.data.user);
      navigate("/home");
    } catch (error) {
      // console.error("Error during login:", error);
      setMessage(error.response?.data?.message);
    }
  };

  const handleLogin = () => {
    window.open("http://localhost:3125/customers/auth", "_self");
  };

  return (
    <div className="body-container">
      <h1>Login Page</h1>
      {message && <p style={{ color: "red" }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogin}>LOGIN WitH GOOGLE </button>

      <button style={{ color: "Red" }} onClick={() => navigate("/register")}>
        GO TO REGISTER
      </button>
      <Link to={"/RequestForgetPassword"} className="forgot-password-button">
        FORGOT PASSWORD ?
      </Link>
    </div>
  );
};

export default LoginPage;
