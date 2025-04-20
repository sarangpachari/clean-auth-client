import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Auth from "../pages/auth/Auth";
import Pnf from "../pages/notFound/Pnf";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="auth" element={<Auth />} />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Pnf />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
