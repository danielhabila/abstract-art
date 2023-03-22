import React from "react";

import Illustration from "../images/testimonial-illustration.svg";
import TestimonialImage from "../images/testimonial-01.jpg";

function Testimonial() {
  return (
    <section className="relative" data-aos="fade-up">
      {/* Illustration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10 mt-5"
        aria-hidden="true"
      >
        <img
          className="max-w-none"
          src={Illustration}
          width="1440"
          height="350"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex mb-3">
                <img
                  className="rounded-full"
                  src={TestimonialImage}
                  width="40"
                  height="40"
                  alt="Testimonial 01"
                />
              </div>
              <div className="font-cabinet-grotesk font-bold text-lg text-gray-900 mb-2">
                "The service helped me find the perfect match. Two clear
                benefits I gained are a good assessment of my needs and a pool
                of reliable potential talents."
              </div>
              <div className="font-cabinet-grotesk text-gray-900 font-medium">
                Patrick Mills <span className="text-gray-400">-</span> CEO,{" "}
                <a
                  className="text-blue-500 font-bold hover:text-blue-600"
                  href="#0"
                >
                  EasyJet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
