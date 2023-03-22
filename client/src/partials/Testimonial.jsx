import React from "react";

import Illustration from "../images/testimonial-illustration.svg";
import TestimonialImage from "../images/testimonial-02.jpg";

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
                I've been using AbstractAI to track my ideas, and it's such a
                helpful and enjoyable product. Thanks for building it!
              </div>
              <div className="font-cabinet-grotesk text-gray-900 font-medium">
                - Julliet Pan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
