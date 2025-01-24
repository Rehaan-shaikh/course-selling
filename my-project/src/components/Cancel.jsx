// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#001313] to-[#9F8383] px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">
          🛑 Purchase Cancelled 🛑
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          It seems you changed your mind. Thats okay! Browse again and find the perfect course for you. 😄
        </p>
      </div>
      <div className="mt-8">
        <iframe
          src="https://giphy.com/embed/a9xhxAxaqOfQs"
          width="480"
          height="360"
          className="rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
      <Link
        to="/courses"
        className="mt-6 px-8 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-400 transition-transform transform hover:scale-105"
      >
        Browse Courses Again
      </Link>
    </div>
  );
};

export default Cancel;
