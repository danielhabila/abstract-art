import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link
              className="block group font-mono text-xl md:text-2xl font-extrabold text-blue-500"
              to="/"
              aria-label=""
            >
              abstract.ai
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="">
                <Link
                  className="btn-sm text-white text-sm font-semibold bg-blue-500 hover:bg-blue-600 lg:px-5 py-2 items-center"
                  to="/create"
                >
                  Create
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
{
  /* <li className="underline">
                <Link
                  className="hidden btn-sm text-white max-md:flex text-sm font-medium bg-blue-500 hover:bg-blue-600 lg:px-5 py-2 items-center"
                  to="/signup"
                >
                  Community
                </Link>
                <Link
                  className="hidden btn-sm text-white md:flex text-sm font-medium bg-blue-500 hover:bg-blue-600 lg:px-4 py-2  items-center"
                  to="/signup"
                >
                  Join Community
                </Link>
              </li> */
}
