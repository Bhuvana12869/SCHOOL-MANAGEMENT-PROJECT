import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const FeeManagement = () => {
  const [fees, setFees] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [amount, setAmount] = useState('');

  const baseURL = 'http://localhost:3000/api'; // Updated base URL for backend API

  const fetchFees = async () => {
    try {
      const response = await axios.get(`${baseURL}/fees`);
      setFees(response.data);
    } catch (error) {
      console.error('Error fetching fees:', error);
    }
  };

  useEffect(() => {
    fetchFees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/fees`, { studentId, amount });
      alert('Fee added successfully');
      setStudentId('');
      setAmount('');
      fetchFees();
    } catch (error) {
      console.error('Error adding fee:', error);
      alert('An error occurred while adding the fee');
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
      <h2>Fee Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student ID:</label>
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <button type="submit">Add Fee</button>
      </form>
      <div>
        <h3>Fee List</h3>
        <ul>
          {fees.map((fee) => (
            <li key={fee._id}>Student ID: {fee.studentId} - Amount: {fee.amount}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default FeeManagement;
