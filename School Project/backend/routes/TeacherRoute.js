// TeacherRoute.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Teacher = require('../model/TeacherModel');

router.use(bodyParser.json());

// Route to handle teacher signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const newTeacher = new Teacher({ name, email, password });
    await newTeacher.save();
    res.status(201).json({ message: 'Teacher signed up successfully' });
  } catch (error) {
    console.error('Error signing up teacher:', error);
    res.status(500).json({ error: 'An error occurred while signing up teacher' });
  }
});

// Route to handle teacher login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await Teacher.findOne({ email });
    if (!teacher || teacher.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in teacher:', error);
    res.status(500).json({ error: 'An error occurred while logging in teacher' });
  }
});

module.exports = router;
