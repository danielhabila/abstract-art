import React, { useEffect, useState } from "react";
import axios from "axios";

import Carousel01 from "../images/carousel-01.jpg";
import Carousel02 from "../images/carousel-02.jpg";
import Carousel03 from "../images/carousel-03.jpg";
import Carousel04 from "../images/carousel-04.jpg";

function Carousel() {
  const [carouselImages, setCarouselImages] = useState([]);
  console.log(carouselImages);

  useEffect(() => {
    const carouselImages = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/images/db");
        if (response.status === 200) {
          setCarouselImages(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    carouselImages();
  }, []);

  return (
    <section className="bg-gray-800">
      <div className="mx-auto">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">
              Shared by the community
            </h2>
          </div>

          {/* DaisyUI Carousel */}
          <div className="carousel carousel-center rounded-box space-x-4">
            {carouselImages?.slice(0, 9).map((item, index) => {
              return (
                <div
                  key={index}
                  // id="carousel-item"
                  className="carousel-item w-80 hover cursor-grab"
                >
                  <img src={item.photo} alt="Pizza" />
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
