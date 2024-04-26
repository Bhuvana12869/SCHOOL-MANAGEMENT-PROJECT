const express = require('express');
const router = express.Router();
const Class = require('../model/ClassModel');

// Route to create a new class
router.post('/create', async (req, res) => {
  try {
    const { className, teacher, schedule } = req.body;
    const newClass = new Class({ className, teacher, schedule });
    await newClass.save();
    res.status(201).json({ message: 'Class created successfully', class: newClass });
  } catch (error) {
    console.error('Error creating class:', error);
    res.status(500).json({ error: 'An error occurred while creating the class' });
  }
});

// Route to get all classes
router.get('/', async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    console.error('Error fetching classes:', error);
    res.status(500).json({ error: 'An error occurred while fetching classes' });
  }
});

// Route to delete a class by ID
router.delete('/:id', async (req, res) => {
  try {
    const classId = req.params.id;
    const deletedClass = await Class.findByIdAndDelete(classId);
    if (!deletedClass) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    console.error('Error deleting class:', error);
    res.status(500).json({ error: 'An error occurred while deleting the class' });
  }
});

module.exports = router;
