const { selectDepts, selectRoles, selectEmployees } = require('./functions');

module.exports = [
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a New Role",
            "Add a New Employee",
            "Update an Employees Role",
            "- Exit -"
        ]
    },
    {
        type: "input",
        name: "deptName",
        message: "What is the name of the Department you want to add?",
        when: (answers) => answers.action.includes("Add a Department"),
    },
    {
        type: "input",
        name: "newRoleName",
        message: "What is the name of the Role you want to add?",
        when: (answers) => answers.action.includes("Add a New Role"),
    },
    {
        type: "input",
        name: "newRoleSalary",
        message: "What is the salary of this new role?",
        when: (answers) => answers.action.includes("Add a New Role"),
    },
    {
        type: "list",
        name: "newRoleDept",
        message: "What department is this new role a part of?",
        choices: selectDepts,
        when: (answers) => answers.action.includes("Add a New Role"),
    },
    {
        type: "input",
        name: "newEmpFirstName",
        message: "What is the new employees First Name?",
        when: (answers) => answers.action.includes("Add a New Employee"),
    },
    {
        type: "input",
        name: "newEmpLastName",
        message: "What is the new employees Last Name?",
        when: (answers) => answers.action.includes("Add a New Employee"),
    },
    {
        type: "list",
        name: "newEmpRole",
        message: "What is the new employees Role?",
        choices: selectRoles,
        when: (answers) => answers.action.includes("Add a New Employee"),
    },
    {
        type: "list",
        name: "newEmpManager",
        message: "Who is the new employees Manager?",
        choices: selectEmployees,
        when: (answers) => answers.action.includes("Add a New Employee"),
    },
    {
        type: "list",
        name: "updateEmpChoice",
        message: "Which employees role would you like to update?",
        choices: selectEmployees,
        when: (answers) => answers.action.includes("Update an Employees Role"),
    },
    {
        type: "list",
        name: "updateEmpRole",
        message: "Which Role would you like to assign this employee?",
        choices: selectRoles,
        when: (answers) => answers.action.includes("Update an Employees Role"),
    }
    
];