const Student = require('../models/Student');
const { AppError } = require('../utils/errorHandler');

const studentController = {
  createStudent: async (req, res, next) => {
    try {
      const studentData = req.body;
      const newStudent = await Student.create(studentData);
      
      res.status(201).json({
        status: 'success',
        data: {
          student: newStudent
        }
      });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        next(new AppError('A student with this email already exists', 400));
      } else if (error.name === 'SequelizeValidationError') {
        next(new AppError(error.errors[0].message, 400));
      } else {
        next(error);
      }
    }
  },

  getAllStudents: async (req, res, next) => {
    try {
      const students = await Student.findAll({
        order: [['created_at', 'DESC']]
      });
      
      res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
          students
        }
      });
    } catch (error) {
      next(error);
    }
  },

  getStudentById: async (req, res, next) => {
    try {
      const { id } = req.params;
      
      if (!id || isNaN(parseInt(id))) {
        throw new AppError('Invalid student ID', 400);
      }
      
      const student = await Student.findByPk(id);
      
      if (!student) {
        throw new AppError('Student not found', 404);
      }
      
      res.status(200).json({
        status: 'success',
        data: {
          student
        }
      });
    } catch (error) {
      next(error);
    }
  },

  updateStudent: async (req, res, next) => {
    try {
      const { id } = req.params;
      const studentData = req.body;
      
      if (!id || isNaN(parseInt(id))) {
        throw new AppError('Invalid student ID', 400);
      }
      
      const student = await Student.findByPk(id);
      
      if (!student) {
        throw new AppError('Student not found', 404);
      }
      
      await student.update(studentData);
      
      res.status(200).json({
        status: 'success',
        data: {
          student
        }
      });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        next(new AppError('A student with this email already exists', 400));
      } else if (error.name === 'SequelizeValidationError') {
        next(new AppError(error.errors[0].message, 400));
      } else {
        next(error);
      }
    }
  },

  deleteStudent: async (req, res, next) => {
    try {
      const { id } = req.params;
      
      if (!id || isNaN(parseInt(id))) {
        throw new AppError('Invalid student ID', 400);
      }
      
      const student = await Student.findByPk(id);
      
      if (!student) {
        throw new AppError('Student not found', 404);
      }
      
      await student.destroy();
      
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = studentController;