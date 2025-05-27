const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const { handleError } = require('./utils/errorHandler');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/students', studentRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Student Management API',
    endpoints: {
      students: '/api/students'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  handleError(err, res);
});

// 404 Route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;