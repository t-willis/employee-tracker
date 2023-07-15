const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const prompt = inquirer.createPromptModule();
const questions = require('./lib/questions');
const { getAll, getAllRoles, addDept, addRole } = require('./lib/functions');

let db;

const handleAction = ({ action, deptName, newRoleName, newRoleSalary, newRoleDept }) => {
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
        case 'Add a Department': {
            addDept(deptName);
            break;
        }
        case 'Add a New Role': {
            addRole(newRoleName, newRoleSalary, newRoleDept)
            break;
        }
    }
}


const init = () => {
    prompt(questions).then(handleAction);
};



db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'employee_db'
}, init());