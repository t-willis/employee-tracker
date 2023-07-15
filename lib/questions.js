module.exports = [
    {
        type: "rawlist",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add A Department",
        ]
    },
    {
        type: "input",
        name: "deptName",
        message: "What is the name of the Department you want to add?",
        when: (answers) => answers.action.includes("Add A Department"),
    },
];