/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/home-image.png";

const MainPage = () => {
  return (
    <div className="bg-[#574964] text-white">
      <section className="flex flex-col justify-center items-center">
        {/* Welcome Page */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#574964] via-[#9F8383] to-[#C8AAAA] bg-opacity-70 py-48 px-10 rounded-lg shadow-md shadow-[#9F8383]">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold sm:text-6xl">
              Welcome to,
              <span className="bg-gradient-to-r from-[#FFDAB3] via-[#C8AAAA] to-[#9F8383] bg-clip-text text-transparent">
                {" "}
                FewvLearns{" "}
              </span>
              !
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-lg sm:text-xl text-[#C8AAAA]">
              We are incredibly excited to announce our first free resource, a
              guide for building modern web applications.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/Feedback"
                className="block w-full rounded-full border text-white hover:text-black border-[#FFDAB3] px-12 py-3 text-sm font-medium hover:bg-[#FFDAB3] focus:outline-none focus:ring sm:w-auto"
              >
                Read Reviews
              </Link>

              <Link
                to="/courses"
                className="block w-full rounded-full border border-[#FFDAB3] px-12 py-3 text-sm font-medium text-white hover:text-black hover:bg-[#FFDAB3] focus:outline-none focus:ring sm:w-auto"
              >
                Buy Courses
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center rounded-xl shadow-md shadow-[#9F8383] max-w-5xl mx-auto mt-24">
            <Link to="/courses">
              <img
                src={backgroundImage}
                alt="Background"
                className="h-auto max-w-full rounded-xl"
              />
            </Link>
          </div>
        </div>

        {/* What is FewvLearns */}
        <div className="my-24 max-w-5xl mx-auto px-10">
          <div className="py-12">
            <div className="text-center">
              <div className="text-sm font-bold tracking-wider text-[#FFDAB3] uppercase">
                Get to know us
              </div>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-6xl py-4">
                What is{" "}
                <span className="bg-gradient-to-r from-[#FFDAB3] via-[#C8AAAA] to-[#9F8383] bg-clip-text text-transparent">
                  FewvLearns
                </span>
                ?
              </p>
              <p className="mt-4 max-w-2xl text-lg text-[#C8AAAA] lg:mx-auto">
                We are a team of developers who are passionate about building
                modern web applications and sharing our knowledge with the
                community.
              </p>
            </div>

            <div className="mt-10 grid gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative bg-[#574964] shadow-lg shadow-[#9F8383] rounded-2xl p-8 hover:shadow-[#C8AAAA] transform transition-transform duration-300 hover:scale-105 text-lg">
                1. FewvLearns is a platform for learning web development. We
                offer courses on various topics like React, Node.js,
                Kubernetes, and more.
              </div>

              <div className="relative bg-[#574964] shadow-lg shadow-[#9F8383] rounded-2xl p-8 hover:shadow-[#C8AAAA] transform transition-transform duration-300 hover:scale-105 text-lg">
                2. Our courses are designed to help you learn new skills and
                advance your career. We offer both free and paid courses.
              </div>

              <div className="relative bg-[#574964] shadow-lg shadow-[#9F8383] rounded-2xl p-8 hover:shadow-[#C8AAAA] transform transition-transform duration-300 hover:scale-105 text-lg">
                3. We have a team of experienced developers who are passionate
                about teaching and helping others learn.
              </div>

              <div className="relative bg-[#574964] shadow-lg shadow-[#9F8383] rounded-2xl p-8 hover:shadow-[#C8AAAA] transform transition-transform duration-300 hover:scale-105 text-lg">
                4. Our goal is to provide you with the knowledge and skills you
                need to succeed in the tech industry.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
