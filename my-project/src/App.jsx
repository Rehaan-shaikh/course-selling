// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import Courses from './components/Courses/courses';
import Feedback from './components/Feedback';
import Team from './components/Team';
import MyCourses from './components/MyCourses';
import Footer from './components/common/Footer';
import Course from './components/Courses/course';


function App() {
  return (
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  );
}

function AuthenticatedApp() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      {/* Conditionally render the Navbar */}
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        {isAuthenticated && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/team" element={<Team />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="//course-details/:id" element={<Course />} />
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />}
    </Router>
  );
}

export default App;
