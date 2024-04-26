// StudentRegistration.js

import React from 'react';
import './StudentRegistration.css';

const StudentRegistration = ({ formData, handleChange, nextPage }) => {
  return (
    <div className="form-container">
      <h2>Student Registration</h2>
      <form onSubmit={nextPage}>
        <label className="form-label">
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input" required />
        </label>
        <label className="form-label">
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-input" required />
        </label>
        <label className="form-label">
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} className="form-input" required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="form-label">
          Nationality:
          <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="form-input" required />
        </label>
        <label className="form-label">
          Email Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
        </label>
        <label className="form-label">
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-input" required />
        </label>
        <label className="form-label">
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} className="form-input" required />
        </label>
        <button type="submit" className="form-button">Next</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
