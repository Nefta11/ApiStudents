const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - age
 *         - email
 *         - major
 *         - registration_number
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado
 *         name:
 *           type: string
 *           description: Nombre del estudiante
 *         age:
 *           type: integer
 *           description: Edad del estudiante
 *         email:
 *           type: string
 *           description: Email del estudiante
 *         major:
 *           type: string
 *           description: Carrera
 *         registration_number:
 *           type: string
 *           description: Matrícula
 *       example:
 *         id: 1
 *         name: Juan Pérez
 *         age: 21
 *         email: juan.perez@example.com
 *         major: Ingeniería en Sistemas
 *         registration_number: A1234567
 */

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Obtiene todos los estudiantes
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *   post:
 *     summary: Crea un nuevo estudiante
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Estudiante creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *
 * /students/{id}:
 *   get:
 *     summary: Obtiene un estudiante por ID
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante
 *     responses:
 *       200:
 *         description: Estudiante encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Estudiante no encontrado
 *   put:
 *     summary: Actualiza un estudiante
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: Estudiante actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Estudiante no encontrado
 *   delete:
 *     summary: Elimina un estudiante
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estudiante
 *     responses:
 *       204:
 *         description: Estudiante eliminado
 *       404:
 *         description: Estudiante no encontrado
 */

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