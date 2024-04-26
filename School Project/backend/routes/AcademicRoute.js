// AcademicRoute.js

const express = require('express');
const router = express.Router();
const Academic = require('../model/AcademicsModel');

// Route to add a new academic course
router.post('/academics/create', async (req, res) => { // Ensure the correct route is specified here
  try {
    const { courseCode, courseName, instructor, schedule, syllabus } = req.body;
    const newAcademic = new Academic({ courseCode, courseName, instructor, schedule, syllabus });
    await newAcademic.save();
    res.status(201).json({ message: 'Academic course added successfully', academic: newAcademic });
  } catch (error) {
    console.error('Error adding academic course:', error);
    res.status(500).json({ error: 'An error occurred while adding the academic course' });
  }
});

module.exports = router;
