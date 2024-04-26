// Academic.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Academic = () => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [schedule, setSchedule] = useState('');
  const [syllabus, setSyllabus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/academics/create', {
        courseCode,
        courseName,
        instructor,
        schedule,
        syllabus
      });
      alert('Academic course added successfully');
      setCourseCode('');
      setCourseName('');
      setInstructor('');
      setSchedule('');
      setSyllabus('');
    } catch (error) {
      console.error('Error adding academic course:', error);
      setError('An error occurred while adding the academic course');
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
      <h2>Add Academic Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Code:</label>
          <input type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} required />
        </div>
        <div>
          <label>Course Name:</label>
          <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
        </div>
        <div>
          <label>Instructor:</label>
          <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} required />
        </div>
        <div>
          <label>Schedule:</label>
          <input type="text" value={schedule} onChange={(e) => setSchedule(e.target.value)} required />
        </div>
        <div>
          <label>Syllabus:</label>
          <input type="text" value={syllabus} onChange={(e) => setSyllabus(e.target.value)} required />
        </div>
        <button type="submit">Add Course</button>
      </form>
      {error && <div>{error}</div>}
    </div>
    </div>
    </div>
    </div>
  );
};

export default Academic;
