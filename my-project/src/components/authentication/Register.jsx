// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#FFDAB3' }}>
      <div className="w-full max-w-md p-8" style={{ backgroundColor: '#C8AAAA', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 className="text-2xl font-bold text-center mb-6" style={{ color: '#574964' }}>Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#574964' }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md"
              style={{ backgroundColor: '#9F8383', color: '#574964', border: 'none', outline: 'none' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#574964' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md"
              style={{ backgroundColor: '#9F8383', color: '#574964', border: 'none', outline: 'none' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#574964' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md"
              style={{ backgroundColor: '#9F8383', color: '#574964', border: 'none', outline: 'none' }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold"
            style={{ backgroundColor: '#574964', color: '#FFDAB3' }}
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm" style={{ color: '#574964' }}>
            Already have an account?{' '}
            <button
              onClick={() => navigate('/')}
              className="font-semibold"
              style={{ color: '#574964', textDecoration: 'underline' }}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
