import React from "react";
import { useNavigate } from "react-router-dom";
import errorStyle from "../ErrorComponent/CustomError.module.css";

const GotoLoginButton = () => {
  const navigate = useNavigate(); // Using the useNavigate hook

  // Function to handle click event
  const handleButtonClick = () => {
    navigate("/login"); // Navigates to the login route
  };

  return (
    <>
      <button
        className={errorStyle.button}
        type="button"
        name="button"
        onClick={handleButtonClick}
      >
        Return To Login
      </button>
    </>
  );
};

export default GotoLoginButton;
