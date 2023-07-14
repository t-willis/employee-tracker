const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const prompt = inquirer.createPromptModule();
const questions = require('./lib/questions');

let db;

const getAll = (query) => {
    db.query('SELECT * FROM ??', query, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
        }
    });
};

const handleAction = ({ action }) => {
    console.log(`Action: ${action}`);
    switch(action) {
        case 'View All Departments': {
            getAll('departments');
            break;
        }
        case 'View All Roles': {
            getAll('roles');
            break;
        }
        case 'View All Employees': {
            getAll('employees');
            break;
        }
    }
}


const init = () => {
    prompt(questions).then(handleAction);
};



init();



db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'employee_db'
});