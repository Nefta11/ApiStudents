const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const createDatabaseIfNotExists = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    await connection.end();
    
    console.log('Database checked/created successfully');
  } catch (error) {
    console.error('Error creating database:', error);
    process.exit(1);
  }
};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  }
);

const initializeDatabase = async () => {
  try {
    // First create database if it doesn't exist
    await createDatabaseIfNotExists();
    
    // Then connect to the database
    await sequelize.authenticate();
    console.log('Database connection successful');
    
    // Sync all models
    await sequelize.sync();
    console.log('Models synchronized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
};

// Initialize the database
initializeDatabase();

module.exports = sequelize;