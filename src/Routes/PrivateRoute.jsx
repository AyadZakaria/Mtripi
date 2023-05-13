import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgetPass from "../auth/ForgetPass";
import PostsPage from "../pages/posts/PostsPage";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";
import SinglePost from "../pages/posts/SinglePost";
const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/Forgetpass" element={<ForgetPass />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Posts" element={<PostsPage />} />
      <Route path="/Post/:id" element={<SinglePost />} />
    </Routes>
  );
};

export default PrivateRoute;
