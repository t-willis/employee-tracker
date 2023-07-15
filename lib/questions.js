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
        message: "What is the salary oof this new role?",
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
];