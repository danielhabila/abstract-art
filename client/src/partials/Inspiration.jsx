import React, { useState, useEffect } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

import Author01 from "../images/author-01.jpg";

function Inspiration() {
  const [category, setCategory] = useState("0");
  const [loading, setLoading] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchPopularImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:2000/api/images");
        setGalleryImages(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    // fetchPopularImages();
    console.log(galleryImages);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClipLoader
            color={"#000"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:pt-32 md:pb-20">
              {/* Section header */}
              <div className="pb-12 md:pb-14 relative text-center md:text-left">
                <h2 className="h2 font-cabinet-grotesk">Most Downloaded</h2>
              </div>

              {/* Content */}
              <div>
                {/* Gallery */}
                <div className="relative">
                  {/* Images grid */}
                  <div
                    className="max-w-sm mx-auto sm:max-w-none grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-start"
                    data-aos-id-inpspiration
                  >
                    {/* 1st Gallery Image */}
                    {galleryImages?.slice(0, 9).map((image, index) => {
                      return (
                        <a
                          key={index}
                          className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                          style={
                            !["0", "1", "3"].includes(category)
                              ? { display: "none" }
                              : {}
                          }
                          href="#0"
                          data-aos="fade-down"
                          data-aos-anchor="[data-aos-id-inpspiration]"
                        >
                          <img
                            className="w-full aspect-square object-cover border-4 p-1"
                            src={image.url}
                            width="352"
                            height="352"
                            alt="Inspiration 01"
                          />
                          {/* Content on hover */}
                          <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                            {/* Backdrop */}
                            <div
                              className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                              aria-hidden="true"
                            />
                            {/* Content */}
                            <div className="relative flex justify-between">
                              {/* Left side */}
                              <div className="flex items-center">
                                <img
                                  className="shrink-0 w-9 h-9 rounded-full mr-4"
                                  src={Author01}
                                  width="36"
                                  height="36"
                                  alt="Author 01"
                                />
                                <div className="truncate">
                                  <div className="font-bold text-white truncate">
                                    Ada Ahdiyat
                                  </div>
                                  <div className="text-xs text-white opacity-60 truncate">
                                    @ada-designer-ok
                                  </div>
                                </div>
                              </div>
                              {/* Right side */}
                              <div className="flex flex-nowrap items-center ml-2">
                                <button className="text-rose-500 hover:text-rose-600">
                                  <span className="sr-only">Like</span>
                                  <svg
                                    className="fill-current"
                                    width="16"
                                    height="14"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                                      fillRule="nonzero"
                                    />
                                  </svg>
                                </button>
                                <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                                  4K
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Inspiration;
