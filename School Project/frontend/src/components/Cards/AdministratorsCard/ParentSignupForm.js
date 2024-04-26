import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ParentSignupForm = () => {
  const [formData, setFormData] = useState({ parentName: '', studentName: '', email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/parents/signup', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error signing up parent:', error);
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
        <center><div><h1>Parent Signup</h1></div></center>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Parent Name</label>
              <input type="text" name="parentName" placeholder="Parent Name" value={formData.parentName} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Student Name</label>
              <input type="text" name="studentName" placeholder="Student Name" value={formData.studentName} onChange={handleChange} required />
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

export default ParentSignupForm;
