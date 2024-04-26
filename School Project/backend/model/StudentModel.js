// StudentModel.js
const mongoose = require('mongoose');

// Define the schema for students
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  registrationNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
