
const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// GET all students
router.get('/', studentController.getAllStudents);

// GET a specific student
router.get('/:id', studentController.getStudentById);

// CREATE a new student
router.post('/', studentController.createStudent);

// UPDATE a student
router.put('/:id', studentController.updateStudent);

// DELETE a student
router.delete('/:id', studentController.deleteStudent);

module.exports = router;