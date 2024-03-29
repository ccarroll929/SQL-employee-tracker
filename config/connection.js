// Acquiring dependencies
const mysql = require('mysql2');
require('dotenv').config();
 
// Connecting to database with mysql, protecting password with .env file
const db = mysql.createConnection(
  {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: process.env.PASSWORD,
      database: 'employee_db'
  },
  // confirm connection to db with yellow console log in terminal
  console.log('Successfully connected to the employee_db database!')
); 

module.exports = db;