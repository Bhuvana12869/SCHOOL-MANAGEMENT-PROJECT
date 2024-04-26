import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library

const TeacherSignupForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send POST request to backend
      const response = await axios.post('http://localhost:3000/teachers/signup', formData);
      console.log(response.data); // Log response from backend
    } catch (error) {
      console.error('Error signing up teacher:', error);
    }
  };

  return (
    <div>
      <div className="navigation-container">
        <nav className="left-navigation">
          <ul>
            <li><Link to="/admin/students">Students</Link></li>
            <li><Link to="/admin/teachers">Teachers</Link></li>
            <li><Link to="/admin/parents">Parents</Link></li>
            <li><Link to="/admin/register">StudentEntrollment</Link></li>
            <li><Link to="/admin/classes">Classes</Link></li>
            <li><Link to ="/admin/grades">Grades</Link></li>
            <li><Link to ="/admin/academics">Academic Management</Link></li>
            <li><Link to ="/admin/staff">Staff Management</Link></li>
            <li><Link to ="/admin/fees">Fee Management</Link></li>
          </ul>
        </nav>
        <div className="navigation-content">
        <center><div><h1>Teacher Signup</h1></div></center>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignupForm;
