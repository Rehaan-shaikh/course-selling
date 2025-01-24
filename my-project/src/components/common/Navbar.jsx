// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  

  const handleLogout = () => {
    logout();
    localStorage.removeItem("User")
    navigate("/");
    window.location.reload(); // Refresh to trigger the `useEffect` in App.jsx
  };

 
  return (
    <nav className="fixed top-0 left-0  h-18 bg-gradient-to-r from-[#574964] via-[#9F8383] to-[#C8AAAA] shadow-lg w-full z-10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-extrabold text-[#FFDAB3] tracking-wide">
            CourseHub
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {[
            { to: "/home", name: "Home" },
            { to: "/courses", name: "Courses" },
            { to: "/feedback", name: "Feedback" },
            { to: "/team", name: "My Team" },
            { to: "/mycourses", name: "My Courses" },
          ].map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                    isActive
                      ? "bg-[#FFDAB3] text-[#574964]"
                      : "text-white hover:bg-[#9F8383] hover:text-[#FFDAB3]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLogout}
            className="hidden md:block px-4 py-2 rounded-lg font-semibold bg-[#574964] text-[#FFDAB3] hover:bg-[#FFDAB3] hover:text-[#574964] transition duration-300"
          >
            Logout
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="block md:hidden text-[#FFDAB3] focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
