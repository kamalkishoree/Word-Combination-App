import { NavLink } from "react-router-dom";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";

const LoginHtml = ({changeHandler,loginHandler,user,formErrors})=>
{
   return(<div className={loginstyle.login}>
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
</div>);
   
}

export default LoginHtml;