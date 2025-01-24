// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
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
import Payment from './Payment';
import Success from './components/Success';
import Cancel from './components/Cancel';



function App() {
  return (
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  );
}

function AuthenticatedApp() {
const {login,isAuthenticated}=useAuth();

useEffect(()=>{
  const user=localStorage.getItem("User")
  console.log(user);
  if(user){
    login()  //ie. set isAuthenticated to true 
    //and this will hlp in persisting data after reload
    //cause after reload isAuthenticated is set to its default false value
  }
})


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
            <Route path="/course-details/:id" element={<Course />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/sucess" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/mycourses" element={<MyCourses />} />
          </>
        )}
      <Route path="*" element={<Login />} /> 
      {/* If not any of the above path matches then it will render login page and if user is currently login then login page nevigates to homepage */}
      </Routes>
      {isAuthenticated && <Footer />}
    </Router>
  );
}

export default App;
