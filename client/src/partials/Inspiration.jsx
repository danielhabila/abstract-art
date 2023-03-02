import React, { useState, useEffect } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import FileSaver from "file-saver";

function Inspiration() {
  const [loading, setLoading] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const downloadImage = (_id, photo) => {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
  };

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
    fetchPopularImages();
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
                    {galleryImages?.slice(0, 9).map((image, index) => {
                      return (
                        <a
                          key={index}
                          className="relative group hover:shadow-xl transition duration-150 ease-in-out"
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
                              <div className=" ">{""}</div>

                              <div className="flex flex-nowrap items-center ml-2">
                                <button
                                  className="text-rose-500 hover:text-rose-600"
                                  onClick={() =>
                                    downloadImage(index, image.url)
                                  }
                                >
                                  <ArrowDownCircleIcon className="w-6" />
                                </button>
                                <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                                  {Math.floor(Math.random() * 9) + 1}K
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
