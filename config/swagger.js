const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Student Management API',
      version: '1.0.0',
      description: 'API para la gestión de estudiantes',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
      {
        url: 'https://api-students-snowy.vercel.app/api',
      },
    ],
  },
  apis: ['./routes/*.js'], // Documentación en los archivos de rutas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
