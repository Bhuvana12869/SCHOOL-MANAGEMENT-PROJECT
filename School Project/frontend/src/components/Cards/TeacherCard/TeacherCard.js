import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library
import './TeacherCard.css';

const TeacherCard = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send POST request to backend
      const response = await axios.post('http://localhost:3000/teachers/login', formData);
      console.log(response.data); // Log response from backend
    } catch (error) {
      console.error('Error logging in teacher:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={"https://res.cloudinary.com/www-obto-co/image/upload/v1694779794/STAGING/general/teacher.png"} alt="Teacher" />
      </div>
      <div className="form-container">
        <h3>Teacher Login</h3>
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
  );
};

export default TeacherCard;
