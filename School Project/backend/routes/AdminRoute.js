// AdminRoute.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Administrator = require('../model/AdminModel'); // Corrected import path

router.use(bodyParser.json());

// Route to handle administrator signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingAdministrator = await Administrator.findOne({ email });
    if (existingAdministrator) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const newAdministrator = new Administrator({ name, email, password });
    await newAdministrator.save();
    res.status(201).json({ message: 'Administrator signed up successfully' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ error: 'An error occurred while signing up' });
  }
});

// Route to handle administrator login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const administrator = await Administrator.findOne({ email });
    if (!administrator || administrator.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

module.exports = router;
