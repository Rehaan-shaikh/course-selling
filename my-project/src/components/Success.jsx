/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const handleGoToCourses = () => {
    navigate("/mycourses");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#001313] to-[#574964] px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-bounce">
          🎉 Purchase Successful! 🎉
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Congratulations! Youre one step closer to mastering your goals. 🚀
        </p>
      </div>
      <div className="mt-8">
        <iframe
          src="https://giphy.com/embed/t3sZxY5zS5B0z5zMIz"
          width="480"
          height="360"
          className="rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
      <button
        onClick={handleGoToCourses}
        className="mt-6 px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-400 transition-transform transform hover:scale-105"
      >
        View My Courses
      </button>
    </div>
  );
};

export default Success;
