import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Signup from "../screens/SignUp/Signup";
import About from "../screens/About/About";
import ContactUs from "../screens/ContactUs/ContactUs";
import TutorApp from "../screens/TutorApp";

export default function RoutesCom() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path=":tab" element={<TutorApp isAuth={false} />} />
      </Route>
    </Routes>
  );
}
