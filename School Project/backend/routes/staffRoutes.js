const express = require('express');
const router = express.Router();
const Staff = require('../model/StaffModel');

// Route to get all staff members
router.get('/staff', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    console.error('Error fetching staff:', error);
    res.status(500).json({ error: 'An error occurred while fetching staff' });
  }
});

// Route to add a new staff member
router.post('/staff', async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const newStaff = new Staff({ name, email, role });
    await newStaff.save();
    res.status(201).json({ message: 'Staff member added successfully', staff: newStaff });
  } catch (error) {
    console.error('Error adding staff member:', error);
    res.status(500).json({ error: 'An error occurred while adding the staff member' });
  }
});

// Other routes for updating and deleting staff members could be added here

module.exports = router;
