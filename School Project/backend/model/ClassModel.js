const mongoose = require('mongoose');

// Define the schema for the Class model
const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true
  },
  schedule: {
    type: String,
    required: true
  }
});

// Create the Class model based on the schema
const Class = mongoose.model('Class', classSchema);

module.exports = Class;
