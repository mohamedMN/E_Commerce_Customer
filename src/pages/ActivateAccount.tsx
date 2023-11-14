import React, { useEffect } from "react";
import { axiosPrivateCustomer } from "../services/api";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const ActivateAccount: React.FC = () => {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  const token = queryParameters.get("token");
  //   console.log("token !" + token);
  useEffect(() => {
    // console.log("token skn,,s   " + token);

    axiosPrivateCustomer
      .post(`/confirm/${token}`)
      .then(() => {
        console.log("Activate Account succeeded ");
        navigate("/main");
      })
      .catch((err) => {
        console.log("Error in Activate Account : " + err);
        navigate("/register");
      });
  }, [token]);

  return <div></div>;
};

export default ActivateAccount;
