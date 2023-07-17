const mysql = require('mysql2');

let db;

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

function selectRoles() {
    return db
    .promise()
    .query("SELECT id, title FROM roles")
    .then(([data]) => {
        return data.map(({ id, title }) => ({
            name: title,
            value: id,
        }));
    })
    .catch((err) => console.error(err));
}

function selectEmployees() {
    return db
    .promise()
    .query("SELECT id, first_name, last_name FROM employees")
    .then(([data]) => {
        return data.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: `${id}`,
        }));
    })
    .catch((err) => console.error(err));
};

db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'employee_db'
});

module.exports = { selectDepts, selectRoles, selectEmployees };