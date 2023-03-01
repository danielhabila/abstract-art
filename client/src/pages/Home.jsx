import React from "react";

import Header from "../partials/Header";
import Hero from "../partials/Hero";
import Inspiration from "../partials/Inspiration";
import Carousel from "../partials/Carousel";
import Pricing from "../partials/Pricing";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Hero />
        <Inspiration />
        <Carousel />
        <Pricing />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
