/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';

import Navbar from './components/common/Navbar'; // Import Navbar
import Home from './components/Home'; // Placeholder for the Home page
import Courses from './components/Courses/courses'; // Placeholder for the Courses page
import Feedback from './components/Feedback'; // Placeholder for Feedback
import Team from './components/Team'; // Placeholder for Meet Team
import MyCourses from './components/MyCourses'; // Placeholder for My Courses

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => setIsAuthenticated(true);
  const handleRegister = () => setIsAuthenticated(true);

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />

        {/* Protected routes */}
        {isAuthenticated && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/team" element={<Team />} />
            <Route path="/mycourses" element={<MyCourses />}/>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
