import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import GetIntouch from "./partials/GetInTouch";
import Subscribe from "./pages/Subscribe";
import FreeTrial from "./pages/FreeTrial";

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
        <Route path="/join" element={<Subscribe />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/signup" element={<FreeTrial />} />
      </Routes>
      <GetIntouch />
    </>
  );
}

export default App;
