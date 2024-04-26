// Home.js

import React from 'react';
import './home.css'; // Import the CSS file

function Home() {
  return (
    <div className="container">
      <div className="image-container">
        <img src="https://th.bing.com/th/id/OIP.K21CuRBWNf7PDxgz7vgf_QHaE7?w=650&h=433&rs=1&pid=ImgDetMain" alt="" />
      </div>
      <div className="text-container">
        <center><h2>SCHOOL MANAGEMENT SYSTEM</h2></center>
       <p> &nbsp; &nbsp; &nbsp;School Management System with everything you need, all brought together.</p>
        <p> &nbsp; &nbsp; &nbsp;Classter School Management System is designed to streamline operations, enhance academic delivery, and foster a vibrant educational community.</p>
        <a href="/navigation">
          <button className="get-started-button">Get Started</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
