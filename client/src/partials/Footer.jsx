import React from "react";
import { Link } from "react-router-dom";
import GithubIcon from "../assets/svgs/GithubIcon";
import TwitterIcon from "../assets/svgs/TwitterIcon";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:pt-12 md:pb-6">
          <div className="flex flex-col items-center justify-center mb-12 md:mb-6">
            <form
              className="w-full max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "You've been successfully added to the greatest list on earth 🤩."
                );
                e.target.email.value = "";
              }}
            >
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
                <input
                  type="email"
                  className="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                  placeholder="Your email"
                  aria-label="Your email"
                  name="email"
                />
                <button
                  className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm whitespace-nowrap"
                  type="submit"
                >
                  Join Newsletter
                </button>
              </div>
              {/* Success message */}
              {/* <p class="font-medium text-emerald-600 text-center sm:text-left sm:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>
          </div>
          {/* Bottom area */}
          <div className="text-center mb-2">
            {/* Social links */}
            <ul className="inline-flex mb-4">
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                  href="https://github.com/danielhabila/abstract-art.git"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <GithubIcon />
                </a>
              </li>
            </ul>
          </div>
          {/* Bottom notes */}
          <div className="text-xs text-gray-400 text-center">
            © {year} abstract. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
