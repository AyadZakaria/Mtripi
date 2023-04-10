import React from "react";
import { Link } from "react-router-dom";
import Pic2 from "../../assets/authIllustrations/signupLady.png";

const Signup = () => {
  return (
    <section className="main-signup-section">
      <div className="left">
        <img src={Pic2} alt="" />
      </div>
      <div className="right">
        <h2 className="welcomeHeading">Create an account</h2>
        <p>Sign up now and unlock exclusive access!</p>
        {/* form start */}
        <form action="/">
        <label htmlFor="Email">Your Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Lucas Moura"
          />
          {/* full name input ends here */}

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
          
          <button className="primaryBtn" type="submit">
            Create Account
          </button>

          <button className="secondaryBtn" type="submit">
            <Link to='/login'>Sign in</Link>
          </button>
        </form>
        {/* form ended here */}
        <h3 className="Help">
          Help@Mtripi.com
        </h3>
      </div>
    </section>
  );
};

export default Signup;
