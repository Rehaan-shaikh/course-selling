/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5173/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
      
    });
    // console.log(response);
    const data = await response.json();

    if (response.ok) {
      alert('Registration successful!');
      navigate('/');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFDAB3]">
      <h1 className="text-3xl font-bold text-[#574964] mb-6">Register</h1>
      <form method="POST" action='http://localhost:5173/register' onSubmit={handleRegister} className="w-1/3 bg-[#C8AAAA] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-[#574964] text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#574964]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#574964] text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#574964]"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#574964] text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#574964]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#574964] text-white py-2 px-4 rounded-lg hover:bg-[#9F8383] w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
