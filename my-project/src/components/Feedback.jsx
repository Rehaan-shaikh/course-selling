/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

const Feedback = () => {
  const [username, setUsername] = useState("");
  const [courseName, setCourseName] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedback from the backend
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/feedback");
        setFeedbacks(response.data);
      } catch (err) {
        console.error("Error fetching feedback:", err);
      }
    };

    fetchFeedback();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = { username, courseName, pros, cons };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/feedback",
        feedbackData
      );
      if (response.status === 201) {
        setUsername("");
        setCourseName("");
        setPros("");
        setCons("");
        alert("Feedback submitted successfully!");
        setFeedbacks([...feedbacks, response.data]);
      } else {
        alert("Failed to submit feedback.");
      }
    } catch (err) {
      console.error("Error submitting feedback:", err);
      alert("An error occurred.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#574964] via-[#9F8383] to-[#C8AAAA] min-h-screen py-20 px-4">
      <section className="bg-gradient-to-r from-[#574964] via-[#9F8383] to-[#C8AAAA] max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-10">
        {/* Feedback Form */}
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-[#FFDAB3] via-[#C8AAAA] to-[#9F8383] bg-clip-text text-transparent">
          Submit Your Feedback
        </h2>
        <p className="text-center text-[#c5bcbc] text-lg mt-2">
          Share your thoughts about our courses!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 mt-6 bg-[#574964] p-8 rounded-lg shadow-md shadow-[#9F8383]"
        >
          <input 
          
            type="text"
            placeholder="Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border bg-[#f6ddc2] border-[#FFDAB3] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDAB3] text-gray-800"
          />
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
            className="border bg-[#f6ddc2] border-[#FFDAB3] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDAB3] text-gray-800"
          />
          <textarea
            placeholder="What did you like about the course?"
            value={pros}
            onChange={(e) => setPros(e.target.value)}
            required
            className="border bg-[#f6ddc2] border-[#FFDAB3] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDAB3] text-gray-800"
          />
          <textarea
            placeholder="What could be improved?"
            value={cons}
            onChange={(e) => setCons(e.target.value)}
            required
            className="border bg-[#f6ddc2] border-[#FFDAB3] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFDAB3] text-gray-800"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FFDAB3] via-[#C8AAAA] to-[#9F8383] text-white py-2 px-6 rounded-full font-medium hover:scale-105 transform transition-transform"
          >
            Submit Feedback
          </button>
        </form>
      </section>

      {/* Feedback List */}
      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-[#FFDAB3] via-[#C8AAAA] to-[#9F8383] bg-clip-text text-transparent">
          All Feedback
        </h2>
        {feedbacks.length === 0 ? (
          <p className="text-center text-lg text-[#9F8383] mt-4">
            No feedback available yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="bg-[#574964] text-white p-6 rounded-xl shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#FFDAB3] via-[#C8AAAA] to-[#9F8383] bg-clip-text text-transparent">
                  {feedback.username}
                </h3>
                <h4 className="text-[#FFDAB3] mt-2">Course: {feedback.course_name}</h4>
                <p className="mt-4">
                  <strong className="text-[#9F8383]">Pros:</strong> {feedback.pros}
                </p>
                <p className="mt-2">
                  <strong className="text-[#C8AAAA]">Cons:</strong> {feedback.cons}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Feedback;