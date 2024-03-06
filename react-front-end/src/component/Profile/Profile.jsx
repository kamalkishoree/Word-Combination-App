import React, { useEffect, useState } from "react";
import basestyle from "../Base.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SearchResult from "../SearchWord/SearchResult";
import TextCombo from "../SearchWord/SearchWord";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmit, setIsSubmit] = useState(false);
  const loginUser = location.state ? location.state.user : null;
  const token = location.state ? location.state.token : null;
  const [userData, setUserData] = useState(loginUser); // Initialize state with loginUser

  // Handle logout
  const handleLogout = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  useEffect(() => {
    if (loginUser === null) {
      navigate("/login", { replace: true });
    }
    if (isSubmit) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .post("http://localhost:8000/api/logout", {}, config)
        .then((res) => {
          alert(res.data.message);
          navigate("/login", { replace: true });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isSubmit, token, loginUser]); // Include token and loginUser in the dependencies array

  return (
    <div className="profile">
      <h1 style={{ color: "black" }}>Welcome {userData && userData.name}!!</h1>
      <TextCombo toekn={token}></TextCombo>

      <form>
        <button className={basestyle.button_common} onClick={handleLogout}>
          Logout
        </button>
      </form>
    </div>
  );
};

export default Profile;
