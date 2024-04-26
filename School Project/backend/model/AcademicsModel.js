const mongoose = require('mongoose');

const academicSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  courseName: { type: String, required: true },
  instructor: { type: String, required: true },
  schedule: { type: String, required: true },
  syllabus: { type: String, required: true },
});

// Create the Class model based on the schema
const Academic = mongoose.model('Academic', academicSchema);

module.exports = Academic;
