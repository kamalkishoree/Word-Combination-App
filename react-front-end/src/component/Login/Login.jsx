import Reac, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
const Login = () => {

	const navigate = useNavigate();
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [user, setUserDetails] = useState({
		email: "",
		password: "",
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
		if (!values.email) {
			error.email = "Email is required";
		} else if (!regex.test(values.email)) {
			error.email = "Please enter a valid email address";
		}
		if (!values.password) {
			error.password = "Password is required";
		}
		return error;
	};

	const loginHandler = (e) => {
		e.preventDefault();
		setFormErrors(validateForm(user));
		setIsSubmit(true);
		// if (!formErrors) {

		// }
	};

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(user);
			axios.post("http://localhost:8000/api/loginUser", user).then((res) => {
				console.log(res);
				alert(res.data.message);
				if (res.status == 401) {
					return false;
				}
				else if (res.status == 200) {
                navigate("/dashboard", { state: { user: res.data.user } });
				}
			});
		}
	}, [formErrors]);
	return (
		<div className={loginstyle.login}>
			<form>
				<h1>Login</h1>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					onChange={changeHandler}
					value={user.email}
				/>
				<p className={basestyle.error}>{formErrors.email}</p>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					onChange={changeHandler}
					value={user.password}
				/>
				<p className={basestyle.error}>{formErrors.password}</p>
				<button className={basestyle.button_common} onClick={loginHandler}>
					Login
				</button>
			</form>
			<NavLink to="/signup">Not yet registered? Register Now</NavLink>
		</div>
	);
};
export default Login;
