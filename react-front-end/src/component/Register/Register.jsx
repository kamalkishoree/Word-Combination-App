import React, { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate, NavLink } from "react-router-dom";
import RegisterView from "./RegisterView";
const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fname) {
      error.fname = "First Name is required";
    }
    if (!values.lname) {
      error.lname = "Last Name is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.password_confirmation) {
      error.cpassword = "Confirm Password is required";
    } else if (values.password_confirmation !== values.password) {
      error.password_confirmation =
        "Confirm password and password should be same";
    }
    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {
    //   setIsSubmit(true);
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post(import.meta.env.VITE_BACKEND_URL+"/api/register", user).then((res) => {
        alert(res.data.message);
        if (res.data.status == 500) {
          return false;
        }
        navigate("/login", { replace: true });
      });
    }
  }, [formErrors]);
  return (
    <RegisterView
      changeHandler={changeHandler}
      signupHandler={signupHandler}
      user={user}
      formErrors={formErrors}
    ></RegisterView>
  );
};
export default Register;
