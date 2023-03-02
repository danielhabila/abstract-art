import React from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import Avatar from "../images/join-avatar.jpg";
import Newsletter from "../partials/Newsletter";

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page content */}
      <div className="grid place-items-center">
        <Newsletter />
      </div>
    </div>
  );
}

export default SignUp;
