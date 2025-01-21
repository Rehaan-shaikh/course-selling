// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    window.location.reload(); // Refresh to trigger the `useEffect` in App.jsx
  };
  
  return (
    <nav className="bg-[#C8AAAA] shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold" style={{ color: '#574964' }}>
          CourseHub
        </h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-[#574964] text-[#FFDAB3]' : 'text-[#574964]'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-[#574964] text-[#FFDAB3]' : 'text-[#574964]'}`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-[#574964] text-[#FFDAB3]' : 'text-[#574964]'}`
              }
            >
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-[#574964] text-[#FFDAB3]' : 'text-[#574964]'}`
              }
            >
              Meet Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mycourses"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-semibold ${isActive ? 'bg-[#574964] text-[#FFDAB3]' : 'text-[#574964]'}`
              }
            >
              My Courses
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-full font-semibold "
              style={{ backgroundColor: '#574964', color: '#FFDAB3' }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
