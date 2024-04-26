import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Classes.css'; // Import CSS file for styling

const Classes = () => {
  const [className, setClassName] = useState('');
  const [teacher, setTeacher] = useState('');
  const [schedule, setSchedule] = useState('');
  const [error, setError] = useState('');
  const [classesList, setClassesList] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/classes');
      setClassesList(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
      setError('An error occurred while fetching classes');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/classes/create', { className, teacher, schedule });
      alert('Class created successfully');
      setClassName('');
      setTeacher('');
      setSchedule('');
      fetchClasses();
    } catch (error) {
      console.error('Error creating class:', error);
      setError('An error occurred while creating the class');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/classes/${id}`);
      setClassesList(classesList.filter(cls => cls._id !== id));
      alert('Class deleted successfully');
    } catch (error) {
      console.error('Error deleting class:', error);
      setError('An error occurred while deleting the class');
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
            <h2>Create New Class</h2>
            {error && <div>{error}</div>}
            <form className="class-form" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="className">Class Name:</label>
    <input
      type="text"
      id="className"
      value={className}
      onChange={(e) => setClassName(e.target.value)}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="teacher">Teacher:</label>
    <input
      type="text"
      id="teacher"
      value={teacher}
      onChange={(e) => setTeacher(e.target.value)}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="schedule">Schedule:</label>
    <input
      type="text"
      id="schedule"
      value={schedule}
      onChange={(e) => setSchedule(e.target.value)}
      required
    />
  </div>
  <button type="submit">Create</button>
</form>

          </div>
          <div>
            <h2>Classes List</h2>
            <table className="classes-table">
              <thead>
                <tr>
                  <th>Class Name</th>
                  <th>Teacher</th>
                  <th>Schedule</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {classesList.map(cls => (
                  <tr key={cls._id}>
                    <td>{cls.className}</td>
                    <td>{cls.teacher}</td>
                    <td>{cls.schedule}</td>
                    <td>
                      <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(cls._id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
