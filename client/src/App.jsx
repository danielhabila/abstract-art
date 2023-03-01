import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import CreatePost from "./pages/CreatePost";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import GetIntouch from "./partials/GetInTouch";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
      <GetIntouch />
    </>
  );
}

export default App;
