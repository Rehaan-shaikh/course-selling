// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import course1 from "../assets/courses-images/1.png";
import course2 from "../assets/courses-images/2.png";
import course3 from "../assets/courses-images/3.png";
import course4 from "../assets/courses-images/4.png";
import course5 from "../assets/courses-images/5.png";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  // Map image_url values to actual image files
  const imageMap = {
    course1: course1,
    course2: course2,
    course3: course3,
    course4: course4,
    course5: course5,
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Assuming you store the user ID in localStorage after login
        const response = await axios.get(`http://localhost:3000/user-courses/${userId}`);

        if (response.status === 200) {
          setCourses(response.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="text-center pt-36 bg-gradient-to-br from-[#574964] via-[#9F8383] to-[#C8AAAA] text-white pb-20 min-h-screen">
      <h1 className="text-4xl font-extrabold pb-4 text-[#FFDAB3] drop-shadow-lg">My Courses</h1>
      <div className="flex flex-wrap justify-center gap-10 py-12 mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 bg-[#9F8383]"
          >
            {/* Use the imageMap to get the correct image URL */}
            <img
              className="w-full h-48 object-cover"
              src={imageMap[course.image_url]}
              alt={course.name}
            />
            <div className="p-6">
              <div className="font-bold text-2xl mb-3 text-[#FFDAB3]">{course.name}</div>
              <div className="flex justify-between items-center">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;