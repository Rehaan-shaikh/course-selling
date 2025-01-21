// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#574964] via-[#9F8383] to-[#C8AAAA] text-[#FFDAB3] py-10 transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-extrabold text-[#FFDAB3] hover:text-[#C8AAAA] transition-colors duration-300">
            FewvLearns
          </h2>
          <p className="text-sm md:text-base text-[#C8AAAA] hover:text-[#FFDAB3] transition-colors duration-300">
            Empowering learners with top-notch resources and guidance to achieve their goals.
          </p>
        </div>
        {/* Footer Text */}
        <p className="text-center mt-6 text-sm md:text-lg text-[#C8AAAA]">
          ©{" "}
          <Link
            to="/"
            className="text-[#FFDAB3] hover:text-[#C8AAAA] transition-colors duration-300"
          >
            FewvLearns
          </Link>{" "}
          {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
