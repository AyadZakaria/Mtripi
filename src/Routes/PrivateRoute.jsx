import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgetPass from "../components/auth/ForgetPass";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Profile from "../components/profile/Profile";

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetpass" element={<ForgetPass />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
};

export default PrivateRoute;
