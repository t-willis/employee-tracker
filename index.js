const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const prompt = inquirer.createPromptModule();
const questions = require('./lib/questions');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'employee_db'
},
    console.log('--- connected to database ---')
);

const getAll = (query) => {
    db.query('SELECT * FROM ??', query, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
        }
    });
};

prompt(questions).then((answers) => {
    if (answers.query === 'View All Departments') {
        getAll('departments');
    } else if (answers.query === 'View All Roles') {
        getAll('roles');
    } else if (answers.query === 'View All Employees') {
        getAll('employees')
    }
})

const init = () => {
    prompt(questions);
};