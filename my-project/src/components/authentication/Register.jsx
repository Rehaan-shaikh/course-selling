/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registration successful!");
      navigate("/");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#FFDAB3] via-[#C8AAAA] to-[#574964]">
      <h1 className="text-4xl font-extrabold text-white mb-8">Register</h1>
      <form
        onSubmit={handleRegister}
        className="w-1/3 bg-white p-8 rounded-xl shadow-xl"
      >
        <div className="mb-6">
          <label className="block text-[#574964] text-sm font-semibold mb-2">
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-3 border border-[#574964] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#574964]"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#574964] text-sm font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-[#574964] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#574964]"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#574964] text-sm font-semibold mb-2">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-[#574964] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#574964]"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#574964] text-white rounded-lg font-bold hover:bg-[#9F8383] transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
