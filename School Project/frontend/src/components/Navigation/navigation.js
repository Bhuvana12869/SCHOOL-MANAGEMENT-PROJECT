// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'
const Navigation = () => {
  return (
    <div>
      <h1>Select Your Profile</h1>
      <div className="card-container">
        <Link to="/navigation/students" className="card">
          <h2>Students</h2>
          {/* Add any relevant information or functionality for students */}
        </Link>
        <Link to="/navigation/teachers" className="card">
          <h2>Teachers</h2>
          {/* Add any relevant information or functionality for teachers */}
        </Link>
        <Link to="/navigation/parents" className="card">
          <h2>Parents</h2>
          {/* Add any relevant information or functionality for parents */}
        </Link>
        <Link to="/navigation/administrators" className="card">
          <h2>Administrators</h2>
          {/* Add any relevant information or functionality for administrators */}
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
