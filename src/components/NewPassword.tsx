import React, { useState, FormEvent } from "react";
import { axiosPrivateCustomer } from "../services/api";
import { useNavigate } from "react-router-dom";

const NewPassword: React.FC = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const token = queryParameters.get("token");
  const id = queryParameters.get("id");
  const [password, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      userId: id,
      token: token,
      password: password,
    };
    console.log(`
      userId: ${id},
      token: ${token},
      password: ${password}
    `);

    axiosPrivateCustomer
      .post(`/resetPassword`, data)
      .then(() => {
        console.log("Reset password succed ");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Password reset failed. Please try again.");
        setTimeout(() => {
          setMessage(false);
        }, 20000);
      });
  };

  return (
    <div className="body-container">
      <h1>Forgot Password</h1>
      {message && <p style={{ color: "green" }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter New Password:</label>
          <input
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"> Reset Password</button>
      </form>
    </div>
  );
};

export default NewPassword;
