import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgetPass from "../auth/ForgetPass";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";
const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/forgetpass" element={<ForgetPass />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Settings" element={<Settings />} />
    </Routes>
  );
};

export default PrivateRoute;
