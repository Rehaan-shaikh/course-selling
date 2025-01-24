/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();


  if(localStorage.getItem("User")){  // ie user is already logged in
    navigate("/home")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    const user=await response.json()
    console.log(user);
    //email: "rehan1@gmail.com"
    // id: 1
    // username : "rehan"
    
      localStorage.setItem("User",user?.user?.username)  

    if (response.ok) {
      login();
      navigate("/home");
      alert("Login successful!");
    } else {
      const data = await response.json();
      alert(data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#FFDAB3] via-[#C8AAAA] to-[#574964]">
      <h1 className="text-4xl font-extrabold text-white mb-8">Login</h1>
      <form
        onSubmit={handleSubmit}
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
          Login
        </button>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="mt-4 text-[#574964] underline w-full text-center font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
