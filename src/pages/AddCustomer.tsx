import React, { useState } from "react";
import { axiosPrivateCustomer } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Animation from "../Assets/Animation - 1700168282784.json";

const AddCustomer: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
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
      navigate("/login");
    } catch (error) {
      console.error("Error adding customer:", error);
      setMessage("Error adding customer:");
    }
  };
  const handleLogin = () => {
    window.open("http://localhost:3125/customers/auth", "_self");
  };

  return (
    <>
   
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ width: "50%" }}>
          <Lottie animationData={Animation} />
        </div>
        <div style={{ width: "50%" }}>
          <h1>Create an account</h1>
          <h4>Enter your details below</h4>

          <form method="post" onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="Name"
                style={{
                  width: "40%",
                  padding: "8px",
                  border: "none",
                  borderBottom: "1px solid grey",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email "
                style={{
                  width: "40%",
                  padding: "8px",
                  border: "none",
                  borderBottom: "1px solid grey",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                style={{
                  width: "40%",
                  padding: "8px",
                  border: "none",
                  borderBottom: "1px solid grey",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "44%",
                backgroundColor: "orange",
                color: "#ffffff",
                padding: "10px 15px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Create Account
            </button>
            <br />
            <br />
            <button
              type="submit"
              onClick={handleLogin}
              style={{
                width: "44%",
                backgroundColor: "red",
                color: "#ffffff",
                padding: "10px 15px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Sign up with Google
            </button>
            <h4 style={{ color: "grey" }}>
              Already have an account?
              <span>
                <Link to={"/login"}>Log in</Link>
              </span>
            </h4>
          </form>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
