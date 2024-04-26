// EducationalBackground.js

import React from 'react';
import './EducationalBackground.css';

const EducationalBackground = ({ formData, handleChange, nextPage, prevPage }) => {
  // Ensure that formData.education is initialized
  const { education } = formData;
  const defaultEducation = {
    level: '',
    institution: '',
    fieldOfStudy: '',
    graduationYear: ''
  };
  const educationData = education || defaultEducation;

  return (
    <div className="educational-background-container">
      <h2>Educational Background</h2>
      <form className="educational-background-form" onSubmit={nextPage}>
        <label>
          Highest Level of Education Completed:
          <input type="text" name="level" value={educationData.level} onChange={handleChange} required />
        </label>
        <label>
          Institution Name:
          <input type="text" name="institution" value={educationData.institution} onChange={handleChange} required />
        </label>
        <label>
          Field of Study:
          <input type="text" name="fieldOfStudy" value={educationData.fieldOfStudy} onChange={handleChange} required />
        </label>
        <label>
          Graduation Year:
          <input type="number" name="graduationYear" value={educationData.graduationYear} onChange={handleChange} required />
        </label>
        <div>
          <button type="button" onClick={prevPage}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default EducationalBackground;
