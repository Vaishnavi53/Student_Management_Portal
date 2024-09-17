// backend/models/student.js
const mongoose = require('mongoose');

// Define a schema for a student
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
  branch: { type: String, required: true },
 //dateEnrolled: { type: Date, default: Date.now },
  YOP: { type: Number, required: true },
  dateEnrolled: { type: Date, default: Date.now }
});

// Create a model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
