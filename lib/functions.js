const mysql = require('mysql2');

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

const getAllRoles = () => {
    db.query('SELECT title, salary, departments.name AS department FROM roles LEFT JOIN departments ON roles.department_id = departments.id', (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
        }
    });
};

const addDept = (input) => {
    db.query('INSERT INTO departments (name) VALUES (?)', input, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            getAll('departments');
        }
    });
};

const addRole = (title, salary, department_id) => {
    db.query('INSERT INTO roles SET ?', { title, salary, department_id }, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            getAllRoles();
        }
    });
};

const addNewEmployee = (firstName, lastName, role, manager) => {
    db.query('INSERT INTO employees SET ?', { firstName, lastName, role, manager}, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            getAll('employees');
        }
    });
};

function selectDepts() {
    return db
    .promise()
    .query("SELECT * FROM departments")
    .then(([data]) => {
    return data.map(({ name, id }) => ({
        name: name,
        value: id,
    }));
    })
    .catch((err) => console.error(err));
};

function selectManager() {
    return db
    .promise()
    .query("SELECT first_name, last_name FROM employees")
    .then(([data]) => {
        return data.map(({ first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: `${first_name} ${last_name}`,
        }));
    })
    .catch((err) => console.error(err));
};

db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'employee_db'
});

module.exports = { getAll, getAllRoles, addDept, addRole, selectDepts, selectManager };