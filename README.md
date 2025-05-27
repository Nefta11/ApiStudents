# Student Management API

A RESTful API for student management built with Express.js and Sequelize ORM following the MVC pattern.

## Features

- Complete CRUD operations for student records
- MVC architecture
- Sequelize ORM for database operations
- RESTful API endpoints
- Input validation and error handling
- Automatic table creation and schema synchronization

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure the `.env` file with your MySQL database credentials:
   ```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=student_db
   DB_PORT=3306
   PORT=3000
   ```
4. Run the application:
   ```
   npm run dev
   ```

## API Endpoints

### Students

- **GET /api/students** - Get all students
- **GET /api/students/:id** - Get a specific student
- **POST /api/students** - Create a new student
- **PUT /api/students/:id** - Update a student
- **DELETE /api/students/:id** - Delete a student

## Student Object Structure

```json
{
  "id": 1,
  "registration_number": "2023001",
  "blood_type": "O+",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 20,
  "grade": "A",
  "created_at": "2023-08-10T12:00:00Z",
  "updated_at": "2023-08-10T12:00:00Z"
}
```

## Request Examples

### Create a Student

```
POST /api/students
Content-Type: application/json

{
  "registration_number": "2023001",
  "blood_type": "O+",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 20,
  "grade": "A"
}
```

### Update a Student

```
PUT /api/students/1
Content-Type: application/json

{
  "name": "John Smith",
  "grade": "A+",
  "blood_type": "AB+"
}
```# ApiStudents
