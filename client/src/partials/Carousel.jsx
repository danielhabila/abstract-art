import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import FileSaver from "file-saver";

function Carousel() {
  const [carouselImages, setCarouselImages] = useState([]);
  console.log(carouselImages);

  const downloadImage = (_id, photo) => {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
  };

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
          <div className="carousel carousel-center rounded-box space-x-4 pb-8">
            {carouselImages?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative group carousel-item w-80 hover cursor-grab"
                >
                  <img src={item.photo} alt="Pizza" />
                  <div className="hidden group-hover:block absolute bottom-0 left-0 right-0 p-3">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex flex-col justify-between">
                      <div className="flex items-center">
                        <div className="">
                          <div className="font-semibold text-white text-sm overflow-y-auto">
                            {item.prompt}
                          </div>
                          {item.name && item.name !== "" ? (
                            <div className="flex justify-between items-center">
                              <div className=" text-white text-xs font-semibold opacity-60 truncate">
                                {item.name}
                              </div>
                              <button
                                className="text-rose-500 hover:text-rose-600 "
                                onClick={() =>
                                  downloadImage(item._id, item.photo)
                                }
                              >
                                <ArrowDownCircleIcon className="w-6" />
                              </button>
                            </div>
                          ) : (
                            <div className="flex justify-between">
                              <div className="">{""}</div>
                              <button
                                className="text-rose-500 hover:text-rose-600"
                                onClick={() =>
                                  downloadImage(item._id, item.photo)
                                }
                              >
                                <ArrowDownCircleIcon className="w-6" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
