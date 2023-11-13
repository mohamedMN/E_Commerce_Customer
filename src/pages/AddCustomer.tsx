// src/components/AddCustomer.tsx
import React, { useState } from "react";
import { axiosPrivateCustomer } from "../services/api";

const AddCustomer: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Make a POST request to add a new customer
      const response = await axiosPrivateCustomer.post("/Customers", data);

      console.log("Customer added successfully:", response.data);
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
