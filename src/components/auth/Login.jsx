import React from "react";
import { Link } from "react-router-dom";
import Pic from "../../assets/authIllustrations/loginDude.png";
import "./style.css";
const Login = () => {
  return (
    <section className="main-login-section">
      {/* left */}
      <div className="left">
        <h2 className="welcomeHeading">Welcome Back !</h2>
        <p>Log in your account ...</p>
        {/* form start */}
        <form action="/">
          <label htmlFor="Email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Example@gmail.com"
          />

          {/* email input ends / pass input starts here */}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          {/* pass input ends here */}

          {/*a div containes a remember me checkbox and the forget pass link  */}
          <div className="forgetPass">
            <div className="childOne">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember"> Remember Me</label>
            </div>

            <div className="childTwo">
              <Link to="/forgetpass"> Forget Password ? </Link>
            </div>
          </div>
          <button className="primaryBtn" type="submit">
            Login
          </button>
        </form>
        {/* form ended here */}
        <h3 className="dontHaveAcc">
          Don't have an account yet ?{" "}
          <span>
            <Link to="/signup">signup now</Link>
          </span>
        </h3>
      </div>

      {/* left part endes here */}

      <div className="right">
        <img src={Pic} alt="Login Icon" />
      </div>
    </section>
  );
};

export default Login;
