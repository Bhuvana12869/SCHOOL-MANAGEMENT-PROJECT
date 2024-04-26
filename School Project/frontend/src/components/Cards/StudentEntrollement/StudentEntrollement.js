

import React, { useState } from 'react';
import StudentRegistration from './StudentRegistration';
import EducationalBackground from './EducationalBackground';
import EnrollmentDetails from './EnrollmentDetails';

const StudentEntrollement= () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    // Initial form data
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextPage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      {page === 1 && <StudentRegistration formData={formData} handleChange={handleChange} nextPage={nextPage} />}
      {page === 2 && <EducationalBackground formData={formData} handleChange={handleChange} prevPage={prevPage} nextPage={nextPage} />}
      {page === 3 && <EnrollmentDetails formData={formData} handleChange={handleChange} prevPage={prevPage} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default StudentEntrollement;
