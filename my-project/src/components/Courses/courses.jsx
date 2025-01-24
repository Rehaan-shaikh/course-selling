// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import course1 from "../../assets/courses-images/1.png";
import course2 from "../../assets/courses-images/2.png";
import course3 from "../../assets/courses-images/3.png";
import course4 from "../../assets/courses-images/4.png";
import course5 from "../../assets/courses-images/5.png";

const courses = [
  { id: 1, name: "Learn About Kafka and Node.js", price: 30, imageUrl: course1 },
  { id: 2, name: "React, but with webpackages and more ", price: 20, imageUrl: course2 },
  { id: 3, name: "Learn About Terraform in Depth", price: 20, imageUrl: course3 },
  { id: 4, name: "Kubernetes and Docker for deployment", price: 30, imageUrl: course4 },
  { id: 5, name: "Create your own Serverless web app", price: 40, imageUrl: course5 },
];

function Courses() {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, checked } = event.target;
    const id = parseInt(value);
    setSelectedItems((prev) =>
      checked ? [...prev, { id, quantity: 1 }] : prev.filter((item) => item.id !== id)
    );
  };
//   Example Behavior:
// Initially, selectedItems = [] (empty).
// If the user selects another course with id = 3 and 2:
// The state becomes: selectedItems = [{ id: 2, quantity: 1 }, { id: 3, quantity: 1 }].
// If the user deselects the course with id = 2:
// The state becomes: selectedItems = [{ id: 3, quantity: 1 }].

  const handleProceedToPayment = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one course!");
      return;
    }

    const selectedCourses = courses.filter((course) =>
      selectedItems.some((item) => item.id === course.id)
    );
    const totalAmount = selectedCourses.reduce((sum, course) => sum + (course.price || 0), 0);

    navigate("/payment", { state: { selectedCourses, totalAmount } });
  };

  return (
    <div className="text-center pt-36 bg-gradient-to-br from-[#574964] via-[#9F8383] to-[#C8AAAA] text-white pb-20 min-h-screen">
      <h1 className="text-4xl font-extrabold pb-4 text-[#FFDAB3] drop-shadow-lg">Our Courses</h1>
      <p className="text-lg text-[#C8AAAA] mb-8">All that you need to kickstart your career.</p>
      <div className="flex flex-wrap justify-center gap-10 py-12 mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 bg-[#9F8383]"
          >
            <img className="w-full h-48 object-cover" src={course.imageUrl} alt={course.name} />
            <div className="p-6">
              <div className="font-bold text-2xl mb-3 text-[#FFDAB3]">{course.name}</div>
              <div className="flex justify-between items-center">
                <Link to={`/course-details/${course.id}`}>
                  <button className="bg-[#FFDAB3] hover:bg-[#C8AAAA] text-[#574964] font-bold py-2 px-6 rounded-full shadow-md transition duration-300">
                    Course Details
                  </button>
                </Link>
                <div className="text-lg font-semibold text-[#FFDAB3]">${course.price}</div>
              </div>
            </div>

            <div className="p-4 bg-[#FFDAB3] text-[#574964] text-center rounded-b-lg">
              <label className="flex items-center justify-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-6 h-6 form-checkbox text-[#574964]"
                  value={course.id}
                  onChange={handleChange}
                  checked={selectedItems.some((item) => item.id === course.id)}
                  //  Makes sure the checkbox is checked only if the course's id is in the selectedItems list
                />
                <span className="ml-2 text-lg font-semibold">Select the course</span>
              </label>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleProceedToPayment}
        className="bg-[#FFDAB3] hover:bg-[#C8AAAA] text-[#574964] font-bold py-3 px-10 rounded-full shadow-lg transition duration-300 mt-6"
      >
        Proceed to Payment
      </button>
    </div>
  );
}

export default Courses;
