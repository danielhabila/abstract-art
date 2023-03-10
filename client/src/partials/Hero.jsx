import React from "react";
import { Link } from "react-router-dom";
import Xsign from "../assets/svgs/Xsign";

import HeroImage from "../images/hero-image.png";

function Hero() {
  return (
    <section className="relative">
      {/* Bg */}
      <div
        className="absolute inset-0 rounded-bl-[100px] bg-gray-50 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[640px]">
              {/* Copy */}
              <h1
                className="h1 font-cabinet-grotesk mb-6 text-5xl md:text-7xl"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Get inspired and bring your ideas to{" "}
                <span className="relative inline-flex text-blue-500">
                  <svg
                    className="absolute left-0 top-full -mt-4 max-w-full -z-10"
                    width="220"
                    height="24"
                    viewBox="0 0 220 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
                      fill="#D1D5DB"
                      fillRule="evenodd"
                    />
                  </svg>
                  life
                </span>
                .
              </h1>
              <p
                className="text-md md:text-xl text-gray-500 mb-10"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Explore our artwork collection. If you don't see something you
                love, have our AI powered artist generate one for you.
              </p>
              {/* Buttons */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <Link
                  className="btn text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                  to="#"
                >
                  Join The Community
                </Link>
              </div>
              {/* Stats */}
              <div
                className="inline-flex items-center space-x-14 md:space-x-6"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <Xsign />
                <Xsign />
              </div>
            </div>
            {/* Image */}
            <div
              className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[40rem] md:ml-16 lg:ml-32 xl:ml-52 mt-12 md:-mt-12"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <img
                src={HeroImage}
                className="md:max-w-none"
                width="584"
                height="659"
                alt="Hero Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
