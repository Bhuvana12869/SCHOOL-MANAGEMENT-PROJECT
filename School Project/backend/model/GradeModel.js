// GradeModel.js

const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
