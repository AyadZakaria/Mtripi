import React from "react";
import { Link } from "react-router-dom";
import Pic from "../assets/authIllustrations/loginDude.png";
import "./style.css";
import { useState } from 'react';
import AuthUser from './AuthUser'; 

const Login = () => {
  const {http, setToken} = AuthUser();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const submitForm =()=>{
        http.post('/login',{email:email,password:password}).then((res)=>{
            setToken(res.data.user,res.data.access_token);
    })
    }

  return (
    <section className="main-login-section">
      {/* left */}
      <div className="left">
        <h2 className="welcomeHeading">Welcome Back !</h2>
        <p>Log in your account ...</p>
        {/* form start */}
        <form >
          <label htmlFor="Email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Example@gmail.com"
            onChange={e=>setemail(e.target.value)}
          />

          {/* email input ends / pass input starts here */}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={e=>setpassword(e.target.value)}
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
          <button className="primaryBtn" type="button" onClick={submitForm}>
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
