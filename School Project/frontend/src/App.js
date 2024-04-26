import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home'; // Correct the import statement
import Navigation from './components/Navigation/navigation'; // Correct the import statement
import StudentCard from './components/Cards/StudentCard/StudentCard';
import TeacherCard from './components/Cards/TeacherCard/TeacherCard';
import ParentsCard from './components/Cards/ParentsCard/ParentsCard';
import AdministratorsCard from './components/Cards/AdministratorsCard/AdministratorsCard';
import AdminPage from './components/Cards/AdministratorsCard/AdminPage';
import ParentSignupForm from './components/Cards/AdministratorsCard/ParentSignupForm';
import StudentSignupForm from './components/Cards/AdministratorsCard/StudentSignupForm/StudentSignupForm';
import TeacherSignupForm from './components/Cards/AdministratorsCard/TeacherSignupForm';
import './App.css';
import StudentEntrollment from './components/Cards/StudentEntrollement/StudentEntrollement';
import Classes from './components/Cards/Classes/Classes'
import Grade from './components/Cards/Grade/Grades'
import Academics from './components/Cards/Academic/Academic';
import StaffManagement from './components/Cards/StaffManagement/StaffManagement';
import FeeManamenget from './components/Cards/FeeManagement/FeeManagement';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/navigation" element={<Navigation />} /> {/* Correct the path */}
        <Route path="/navigation/students" element={<StudentCard />} />
        <Route path="/navigation/parents" element={<ParentsCard />} />
        <Route path="/navigation/administrators" element={<AdministratorsCard />} />
        <Route path="/navigation/teachers" element={<TeacherCard />} />
        <Route path="/admin/students" element={<StudentSignupForm />} />
        <Route path="/admin/teachers" element={<TeacherSignupForm />} />
        <Route path="/admin/parents" element={<ParentSignupForm />} />
        <Route path="/admin/register" element={<StudentEntrollment />} />
        <Route path="/admin/classes" element={<Classes />} />
        <Route path="/admin/grades" element={<Grade />} />
        <Route path="/admin/academics" element={<Academics />} />
        <Route path="/admin/staff" element={<StaffManagement />} />
        <Route path="/admin/fees" element={<FeeManamenget />} />
        <Route path="/admin" element={<AdminPage />}/>
      </Routes>
    </Router>
  );
}

export default App;