import React, { useState } from "react";
import basestyle from "../Base.module.css";
import { Link, useLocation } from "react-router-dom";
import BackButton from "../BackButton";

const Profile = () => {
    const location = useLocation();
    const loginUser = location.state ? location.state.user : null;
    const [userData, setUserData] = useState(loginUser); // Initialize state with loginUser

    // Handle logout
    const handleLogout = () => {
        setUserData({}); // Clear user data
    };

    return (
        <div className="profile">
            <h1 style={{ color: "black" }}>Welcome {userData && userData.name}!!</h1>
            
 <Link className="btn btn-primary mb-2 " to={"/text"}>
            Text
          </Link>            <button
                className={basestyle.button_common}
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Profile;
