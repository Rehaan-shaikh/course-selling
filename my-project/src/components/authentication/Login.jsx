// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      navigate('/home');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFDAB3]">
      <h1 className="text-3xl font-bold text-[#574964] mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="w-1/3 bg-[#C8AAAA] p-6 rounded-lg shadow-md">
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
          Login
        </button>
        <button
          type="button"
          onClick={() => navigate('/register')}
          className="mt-4 text-[#574964] underline w-full text-center"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
