import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const apiUrl = 'http://localhost:3000'; // Replace this with your backend server URL

const StaffManagement = () => {
  const [staff, setStaff] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get(`${apiUrl}/staff`);
      setStaff(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/staff`, { name, email, role });
      alert('Staff member added successfully');
      setName('');
      setEmail('');
      setRole('');
      setStaff([...staff, response.data.staff]); // Update staff list with the new member
    } catch (error) {
      console.error('Error adding staff member:', error);
      setError('An error occurred while adding the staff member');
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
            <li><Link to="/admin/register">Student Enrollment</Link></li>
            <li><Link to="/admin/classes">Classes</Link></li>
            <li><Link to="/admin/grades">Grades</Link></li>
            <li><Link to ="/admin/academics">Academic Management</Link></li>
            <li><Link to ="/admin/staff">Staff Management</Link></li>
            <li><Link to ="/admin/fees">Fee Management</Link></li>
          </ul>
        </nav>
        <div className="navigation-content">
    <div>
      <h2>Staff Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
        </div>
        <button type="submit">Add Staff Member</button>
      </form>
      {error && <div>{error}</div>}
      <div>
        <h3>Staff List</h3>
        <ul>
          {staff.map((staffMember) => (
            <li key={staffMember._id}>{staffMember.name} - {staffMember.email} - {staffMember.role}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default StaffManagement;
