const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const prompt = inquirer.createPromptModule();

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'employee_db'
},
    console.log('connected to database')
);