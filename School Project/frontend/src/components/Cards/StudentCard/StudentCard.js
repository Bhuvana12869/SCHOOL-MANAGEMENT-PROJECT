import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library
import './StudentCard.css';

const StudentCard = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send POST request to backend
      const response = await axios.post('http://localhost:3000/students/login', formData);
      console.log(response.data); // Log response from backend
    } catch (error) {
      console.error('Error logging in student:', error);
    }
  };

  return (
    <center>
      <div className="login-container">
        <div className="image-container">
          <img src={"https://img.freepik.com/free-vector/progress-indicator-concept-illustration_114360-4782.jpg?t=st=1714013357~exp=1714016957~hmac=6705a76c78d9a67b2bbdc8284bef47fb5e3e5be1a70f4a274689112ef63e1f0f&w=740"} alt="Student" />
        </div>
        <div className="form-container">
          <h3>Student Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </center>
  );
};

export default StudentCard;
