import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Home from "../pages/Home";
import ShowProfile from "../pages/profile/ShowProfile";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile/:id" element={<ShowProfile />} />
    </Routes>
  );
};

export default PublicRoutes;
