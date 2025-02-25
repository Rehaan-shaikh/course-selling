// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; // Add axios for making HTTP requests

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCourses, totalAmount } = location.state || {};

  const handleConfirmPayment = async () => {
    try {
      const userId = localStorage.getItem("userId"); // Assuming you store the user ID in localStorage after login
      const courseIds = selectedCourses.map((course) => course.id);

      // console.log(selectedCourses)
      // {id: 3, name: 'Learn About Terraform in Depth', price: 20, imageUrl: '/src/assets/courses-images/3.png'}
      // console.log(courseIds)    //op: course id
      
      // Send the course IDs to the backend
      const response = await axios.post("http://localhost:3000/confirm-payment", {
        userId,  //id of user
        courseIds, //an array that stores the id of most recent bought course
      });

      if (response.status === 200) {
        navigate("/sucess"); // Navigate to the success page
      }
    } catch (error) {
      console.error("Payment confirmation failed:", error);
      alert("Payment confirmation failed. Please try again.");
    }
  };

  if (!selectedCourses || selectedCourses.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FFDAB3]">
        <h2 className="text-3xl font-bold text-[#574964]">No courses selected!</h2>
        <button
          className="ml-4 bg-[#574964] text-[#FFDAB3] font-bold py-2 px-6 rounded shadow-lg"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFDAB3] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-[#574964] mb-6">Payment Details</h1>
      <div className="w-full max-w-3xl bg-[#C8AAAA] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#574964] mb-4">Selected Courses:</h2>
        <ul className="mb-6">
          {selectedCourses.map((course) => (
            <li key={course.id} className="text-lg text-[#574964]">
              {course.name} - ${course.price || 0}
            </li>
          ))}
        </ul>
        <p className="text-xl font-semibold text-[#574964] mb-6">
          <strong>Total Amount:</strong> ${totalAmount}
        </p>
        <p className="text-lg text-[#574964] mb-6">
          <strong>Username:</strong> {localStorage.getItem("User")}
        </p>
        <p className="text-lg text-[#574964] mb-6">
          <strong>Date:</strong> {new Date().toLocaleDateString()}
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleConfirmPayment}
            className="bg-[#574964] text-[#FFDAB3] font-bold py-2 px-6 rounded shadow-lg transition duration-300 hover:bg-[#C8AAAA]"
          >
            Confirm Payment
          </button>
          <button
            onClick={() => navigate("/cancel")}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300 hover:bg-red-400"
          >
            Cancel Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;