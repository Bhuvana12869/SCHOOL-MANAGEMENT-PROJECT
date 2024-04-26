// StudentRoute.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Student = require('../model/StudentModel');

router.use(bodyParser.json());

// Route to handle student signup
router.post('/signup', async (req, res) => {
  try {
    const { name, registrationNumber, email, password } = req.body;
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const newStudent = new Student({ name, registrationNumber, email, password });
    await newStudent.save();
    res.status(201).json({ message: 'Student signed up successfully', student: newStudent });
  } catch (error) {
    console.error('Error signing up student:', error);
    res.status(500).json({ error: 'An error occurred while signing up student' });
  }
});

// Route to handle student login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student || student.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in student:', error);
    res.status(500).json({ error: 'An error occurred while logging in student' });
  }
});

module.exports = router;
