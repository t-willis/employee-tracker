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
        'view all departments'
    ]
}).then((answers) => {
    console.log(answers.query);
    if (answers.query === 'view all departments') {
        db.query('SELECT * FROM departments', (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.table(results);
            }
        })
    }
})