const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Parent = require('../model/ParentModel');

router.use(bodyParser.json());

router.post('/signup', async (req, res) => {
  try {
    const { parentName, studentName, email, password } = req.body;
    const existingParent = await Parent.findOne({ email });
    if (existingParent) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const newParent = new Parent({ parentName, studentName, email, password });
    await newParent.save();
    res.status(201).json({ message: 'Parent signed up successfully' });
  } catch (error) {
    console.error('Error signing up parent:', error);
    res.status(500).json({ error: 'An error occurred while signing up parent' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const parent = await Parent.findOne({ email });
    if (!parent || parent.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in parent:', error);
    res.status(500).json({ error: 'An error occurred while logging in parent' });
  }
});

module.exports = router;
