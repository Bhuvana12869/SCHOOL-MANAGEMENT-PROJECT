const express = require('express');
const router = express.Router();
const Fee = require('../model/FeeModel');

router.get('/fees', async (req, res) => {
  try {
    const fees = await Fee.find();
    res.json(fees);
  } catch (error) {
    console.error('Error fetching fees:', error);
    res.status(500).json({ error: 'An error occurred while fetching fees' });
  }
});

router.post('/fees', async (req, res) => {
  try {
    const { studentId, amount } = req.body;
    const newFee = new Fee({ studentId, amount });
    await newFee.save();
    res.status(201).json({ message: 'Fee added successfully', fee: newFee });
  } catch (error) {
    console.error('Error adding fee:', error);
    res.status(500).json({ error: 'An error occurred while adding the fee' });
  }
});

module.exports = router;
