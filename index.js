const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const prompt = inquirer.createPromptModule();
const questions = require('./lib/questions');
const { getAll, getAllRoles, addDept } = require('./lib/functions');

let db;

const handleAction = ({ action, deptName }) => {
    switch(action) {
        case 'View All Departments': {
            getAll('departments');
            break;
        }
        case 'View All Roles': {
            getAllRoles();
            break;
        }
        case 'View All Employees': {
            getAll('employees');
            break;
        }
        case 'Add A Department': {
            addDept(deptName);
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