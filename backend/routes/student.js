// backend/routes/student.js
const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Create a new student
router.post('/add', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(200).json({ message: 'Student added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all students
router.get('/all', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});


// DELETE request to remove a student by ID
router.delete('/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const result = await Student.findByIdAndDelete(studentId);
    if (!result) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH request to update student fields
router.patch('/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const updateData = req.body;
    const result = await Student.findByIdAndUpdate(studentId, updateData, { new: true });
    if (!result) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
