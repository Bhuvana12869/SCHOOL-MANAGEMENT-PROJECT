// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function NavigationPage() {
  return (
    <div className="navigation-container">
      <nav className="left-navigation">
        <ul>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/teachers">Teachers</Link></li>
          <li><Link to="/parents">Parents</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationPage;
