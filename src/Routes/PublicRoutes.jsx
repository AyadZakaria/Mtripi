import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Home from "../pages/Home";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default PublicRoutes;
