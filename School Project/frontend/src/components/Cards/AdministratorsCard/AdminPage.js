// AdminPage.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ParentSignupForm from './ParentSignupForm';
import TeacherSignupForm from './TeacherSignupForm';
import StudentSignupForm from './StudentSignupForm/StudentSignupForm';
import StudentEntrollment from '../StudentEntrollement/StudentEntrollement';
import Academics from '../Academic/Academic';
import Classes from '../Classes/Classes'
import Grade from '../Grade/Grades';
import StaffManagement from '../StaffManagement/StaffManagement';
import './AdminPage.css'; // Import CSS file
import FeeManagement from '../FeeManagement/FeeManagement';

const AdminPage = () => {
  return (
    <div>
      <h2>Admin Page</h2>
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
          <Routes>
            <Route path="/admin/students" element={<StudentSignupForm />} />
            <Route path="/admin/teachers" element={<TeacherSignupForm />} />
            <Route path="/admin/parents" element={<ParentSignupForm />} />
            <Route path="/admin/register" element={<StudentEntrollment />} />
            <Route path="/admin/classes" element={<Classes />} />
            <Route path="/admin/grades" element={<Grade />} />
            <Route path="/admin/academics" element={<Academics />} />
            <Route path="/admin/staff" element={<StaffManagement />} />
            <Route path="/admin/fees" element={<FeeManagement />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
