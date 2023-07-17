const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const prompt = inquirer.createPromptModule();
const questions = require('./lib/questions');

let db;

const handleAction = ({ action, deptName, newRoleName, newRoleSalary, newRoleDept, newEmpFirstName, newEmpLastName, newEmpRole, newEmpManager, updateEmpChoice, updateEmpRole }) => {
    switch(action) {
        case 'View All Departments': {
            getAllDepartments();
            break;
        }
        case 'View All Roles': {
            getAllRoles();
            break;
        }
        case 'View All Employees': {
            getAllEmployees();
            break;
        }
        case 'Add a Department': {
            addDept(deptName);
            break;
        }
        case 'Add a New Role': {
            addRole(newRoleName, newRoleSalary, newRoleDept);
            break;
        }
        case 'Add a New Employee': {
            addEmployee(newEmpFirstName, newEmpLastName, newEmpRole, newEmpManager);
            break;
        }
        case 'Update an Employees Role': {
            updateEmployeeRole(updateEmpRole, updateEmpChoice);
            break;
        }
        case '- Exit -': {
            process.exit();
        }
    }
}


const init = () => {
    prompt(questions).then(handleAction);
};



const getAllDepartments = () => {
    db.query('SELECT * FROM departments', (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            init();
        }
    });
};

const getAllRoles = () => {
    db.query('SELECT title, salary, departments.name AS department FROM roles LEFT JOIN departments ON roles.department_id = departments.id', (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            init();
        }
    });
};

const getAllEmployees = () => {
    db.query('SELECT orig.first_name, orig.last_name, roles.title,  CASE WHEN orig.manager_id IS NULL THEN \'n/a\' ELSE CONCAT(MAN.first_name, \' \', MAN.last_name) END as manager FROM employees AS orig LEFT JOIN roles ON orig.role_id = roles.id LEFT JOIN employees AS MAN ON MAN.id = orig.manager_id', (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            init();
        }
    });
};

const addDept = (input) => {
    db.query('INSERT INTO departments (name) VALUES (?)', input, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`The role ${input} has been added to the database!`);
            init();
        }
    });
};

const addRole = (title, salary, department_id) => {
    db.query('INSERT INTO roles SET ?', { title, salary, department_id }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`The role ${title} has been added to the database!`);
            init();
        }
    });
};

const addEmployee = (first_name, last_name, role_id, manager_id) => {
    db.query('INSERT INTO employees SET ?', { first_name, last_name, role_id, manager_id }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${first_name} ${last_name} has been added to the database!`);
            init();
        }
    });
};

const updateEmployeeRole = (role_id, id) => {
    db.query('UPDATE employees SET role_id = ? WHERE id = ?', [ role_id, id ], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            init();
        }
    });
};


db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'employee_db'
}, init());