// src/Login.tsx
import React, { useState } from "react";
// // import axiosPrivateCustomer from "../services/api";
// import { axiosPrivateCustomer } from "../services/api";
import { axiosPrivateCustomer } from "../services/api";
import { useNavigate } from "react-router-dom";

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
    try {
      const response = await axiosPrivateCustomer.post("/login", data);

      console.log("Login successful");
      console.log("User:", response.data.user);
      navigate("/main");
    } catch (error) {
      // console.error("Error during login:", error);
      setMessage(error.response?.data?.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {message && <p style={{ color: "red" }}>{message}</p>}

      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="email"
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
      <button style={{ color: "Red" }} onClick={() => navigate("/register")}>
        GO TO REGISTER
      </button>
    </div>
  );
};

export default LoginPage;
