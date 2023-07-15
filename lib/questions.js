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
            "Add a New Employee"
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
        choices: [
            {
                name: "Sales",
                value: 1,
            },
            {
                name: "Development",
                value: 2,
            },
            {
                name: "Warehouse",
                value: 3,
            },
        ],
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
        type: "input",
        name: "newEmpRole",
        message: "What is the new employees Role?",
        when: (answers) => answers.action.includes("Add a New Employee"),
    },
    {
        type: "list",
        name: "newEmpManager",
        message: "Who is the new employees Manager?",
        when: (answers) => answers.action.includes("Add a New Employee"),
    },
    
];