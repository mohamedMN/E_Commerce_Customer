// src/Login.tsx
import React, { useState } from "react";
// import axiosPrivateCustomer from "../services/api";
import { axiosPrivateCustomer } from "../services/api";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form method="post" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default LoginPage;
