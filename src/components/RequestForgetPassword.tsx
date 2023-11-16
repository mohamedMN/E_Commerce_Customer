import React, { useState, FormEvent } from "react";
import { axiosPrivateCustomer } from "../services/api";
import { useNavigate } from "react-router-dom";

const RequestForgetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = {
        email: email,
      };
      console.log("email " + data.email);

      await axiosPrivateCustomer
        .post("/PasswordRequest", data)
        .then((e) => {
          console.log("succes  " + e);
          setMessage("Password reset link sent to your email.");
        })
        .catch(() => {
          setMessage("Password reset request failed. Please try again.");
          setTimeout(() => {
            setMessage(false);
          }, 2000);
        });
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="body-container">
      <h1>Forgot Password</h1>
      {message && <p style={{ color: "green" }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button style={{ color: "Red" }} onClick={() => navigate("/login")}>
        GO TO LOGIN
      </button>
    </div>
  );
};

export default RequestForgetPassword;
