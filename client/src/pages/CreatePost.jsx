import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomPrompt } from "../partials/getRandomPrompt";
import FormField from "../partials/FormField";
import Loader from "../assets/svgs/Loader";
import preview from "../assets/preview.png";
import axios from "axios";
import Header from "../partials/Header";
import HeroImage from "../images/hero-image.png";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import FileSaver from "file-saver";

const CreatePost = () => {
  const navigate = useNavigate();
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  // -----------------------------------------------------------------------------

  const downloadImage = () => {
    if (form.photo) {
      FileSaver.saveAs(
        form.photo,
        "iPromiseYouWontRegretGivingMeAnInterview.jpg"
      );
    }
  };

  // -----------------------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      try {
        setLoading(true);
        await axios.post("/api/postToDB", {
          ...form,
        });
        alert("Success");
        navigate("/");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt and generate an image");
    }
  };
  // -----------------------------------------------------------------------------

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };
  // -----------------------------------------------------------------------------
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await axios.post("/api/dalle", {
          prompt: form.prompt,
        });

        const data = response.data;
        console.log("returned image data from openai", data);
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
        console.log(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  // -----------------------------------------------------------------------------
  return (
    <>
      <Header />

      <section className=" relative max-w-6xl mx-auto px-4 sm:px-6 min-w-screen ">
        <div className="relative max-w-xl mx-auto md:max-w-none md:text-left flex flex-col md:flex-row ">
          {/* left side */}
          <div
            className="relative top-36 pb-20"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            <h1 className="h2 font-cabinet-grotesk max-w-xl">
              Bring your ideas to life with the power of AI.
            </h1>

            <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                <FormField
                  labelName="Your Name"
                  type="text"
                  name="name"
                  placeholder="Eg., danny drinkwater"
                  value={form.name}
                  handleChange={handleChange}
                />
                <FormField
                  labelName="Prompt"
                  type="text"
                  name="prompt"
                  placeholder="Eg., Create an abstract piece inspired by movement and dance"
                  value={form.prompt}
                  handleChange={handleChange}
                  isSurpriseMe //lets us know whether to show additional button with this form field
                  handleSurpriseMe={handleSurpriseMe}
                />
                <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 h-96 p-3 flex justify-center items-center">
                  {form.photo ? (
                    <img
                      src={form.photo}
                      alt={form.prompt}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={preview}
                      alt="preview"
                      className="w-9/12 h-9/12 object-contain opacity-40"
                    />
                  )}

                  {generatingImg && (
                    <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                      <Loader />
                    </div>
                  )}
                  {/* ************************************************************** */}
                  {/* Content on hover */}
                  <div className=" md:group-hover:block absolute bottom-0 left-0 right-0 p-3">
                    {/* Content */}
                    <div className="relative flex justify-between">
                      <div className=" ">{""}</div>

                      <button
                        className="button text-rose-500 hover:text-rose-600"
                        onClick={() => downloadImage()}
                      >
                        <ArrowDownCircleIcon className="icon w-6" />
                      </button>
                    </div>
                  </div>
                  {/* ************************************************************** */}
                </div>
              </div>
              <div className="mt-5 flex gap-5">
                <button
                  type="button"
                  onClick={generateImage}
                  className=" text-white bg-green-600 hover:bg-green-600/80 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  {generatingImg ? "Generating..." : "Generate"}
                </button>
              </div>
              <div className="mt-10">
                <p className="mt-2 text-[#666e75] text-[14px]">
                  ** Once you have created a masterpiece, you can share it with
                  others in the community **
                </p>
                <button
                  type="submit"
                  className="mt-3 text-white bg-blue-500 hover:bg-blue-500/80 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  {loading ? "Sharing..." : "Share with the Community"}
                </button>
              </div>
            </form>
          </div>
          {/* Image -- right side*/}
          <div
            className="hidden md:flex max-w-sm mx-auto md:max-w-none  md:left-[40rem] md:ml-16 lg:ml-32 xl:ml-52 mt-12 md:-mt-12 absolute top-40 "
            data-aos="fade-left"
            data-aos-duration="1100"
          >
            <img
              src={HeroImage}
              className="md:max-w-none "
              width="584"
              height="659"
              alt="Hero Illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatePost;
