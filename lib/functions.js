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

db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'employee_db'
});

module.exports = { getAll, getAllRoles, addDept };