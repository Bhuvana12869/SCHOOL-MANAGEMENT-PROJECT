const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  parentName: { type: String, required: true },
  studentName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
