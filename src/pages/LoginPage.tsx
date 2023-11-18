import React, { useState } from "react";
import { axiosPrivateCustomer } from "../services/api";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Animation from "../Assets/Animation - 1700168282784.json";
import { Link } from "react-router-dom";

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
      setMessage(error.response?.data?.message);
    }
  };

  const handleLogin = () => {
    window.open("http://localhost:3125/customers/auth", "_self");
  };

  return (
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
        <h1>Log in</h1>
        <h4>Enter your details below</h4>

        <form method="post" onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Email or Phone Number"
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
            Log in
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
            Don't have an account?
            <span>
              <Link to={"/register"}>Sign up</Link>
            </span>
          </h4>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LoginPage;
