# Student Management API

A RESTful API for student management built with Express.js, Sequelize ORM, and documented with Swagger.

## Features

- Complete CRUD operations for student records
- MVC architecture
- Sequelize ORM for database operations
- RESTful API endpoints
- Input validation and error handling
- Automatic table creation and schema synchronization
- **Swagger UI documentation**

## Setup Instructions

1. **Clone the repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the application:**
   ```bash
   npm run dev
   # o
   node server.js
   ```

## API Endpoints

Base URL local: `http://localhost:3000/api/students`
Base URL producción: `https://apistudents-1pof.onrender.com/api/students`

### Students

- **GET /** - Get all students
- **GET /:id** - Get a specific student
- **POST /** - Create a new student
- **PUT /:id** - Update a student
- **DELETE /:id** - Delete a student

## Student Object Structure

```json
{
  "id": 1,
  "registration_number": "2023001",
  "blood_type": "O+",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 20,
  "grade": "A"
}
```

## Request Examples

### Create a Student

```http
POST /api/students
Content-Type: application/json

{
  "registration_number": "2023001",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 20,
  "major": "Ingeniería en Sistemas"
}
```

### Update a Student

```http
PUT /api/students/1
Content-Type: application/json

{
  "name": "John Smith",
  "major": "Matemáticas"
}
```

## Ejemplos de uso de la API (con JSON)

### Obtener todos los estudiantes

**GET** `/api/students`

_No requiere body._

---

### Obtener un estudiante por ID

**GET** `/api/students/1`

_No requiere body._

---

### Crear un nuevo estudiante

**POST** `/api/students`

```json
{
  "registration_number": "2023001",
  "blood_type": "O+",
  "name": "Juan Pérez",
  "email": "juan.perez@example.com",
  "age": 21,
  "grade": "A"
}
```

---

### Actualizar un estudiante

**PUT** `/api/students/1`

```json
{
  "name": "Juan Actualizado",
  "major": "Matemáticas"
}
```

---

### Eliminar un estudiante

**DELETE** `/api/students/1`

_No requiere body._

---

## Ejemplo de JSON para probar la API

Puedes usar este JSON para crear un estudiante con una petición POST a `/api/students`:

```json
{
  "registration_number": "2024001",
  "blood_type": "O+",
  "name": "Juan Pérez",
  "email": "juan.perez@example.com",
  "age": 21,
  "grade": "A"
}
```

---

## Swagger Documentation

Accede a la documentación interactiva de la API en:

- Local: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
- Producción: [https://apistudents-1pof.onrender.com/api/docs](https://apistudents-1pof.onrender.com/api/docs)

---

# ApiStudents
