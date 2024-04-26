// EnrollmentDetails.js

import React from 'react';

const EnrollmentDetails = ({ formData, handleChange, prevPage, handleSubmit }) => {
  return (
    <div>
      <h2>Enrollment Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Program of Interest:
          <input type="text" name="programOfInterest" value={formData.programOfInterest} onChange={handleChange} required />
        </label>
        <label>
          Enrollment Type:
          <select name="enrollmentType" value={formData.enrollmentType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Online">Online</option>
            <option value="In-person">In-person</option>
          </select>
        </label>
        <label>
          Preferred Start Date:
          <input type="date" name="preferredStartDate" value={formData.preferredStartDate} onChange={handleChange} required />
        </label>
        <label>
          How did you hear about us?
          <input type="text" name="referralSource" value={formData.referralSource} onChange={handleChange} required />
        </label>
        <button type="button" onClick={prevPage}>Back</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnrollmentDetails;
