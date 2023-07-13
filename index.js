const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const prompt = inquirer.createPromptModule();

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'employee_db'
},
    console.log('--- connected to database ---')
);

prompt({
    type: 'rawlist',
    name: 'query',
    message: 'select an option',
    choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees'
    ]
}).then((answers) => {
    console.log(answers.query);
    if (answers.query === 'View All Departments') {
        db.query('SELECT * FROM departments', (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.table(results);
            }
        })
    } else if (answers.query === 'View All Roles') {
        db.query('SELECT * FROM roles', (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.table(results);
            }
        })
    } else if (answers.query === 'View All Employees') {
        db.query('SELECT * FROM employees', (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.table(results);
            }
        })
    }
})