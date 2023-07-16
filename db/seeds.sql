USE employee_db;

INSERT INTO departments (name) VALUES
    ("Sales"),
    ("Development"),
    ("Warehouse");

INSERT INTO roles (title, salary, department_id) VALUES
    ("Sales Lead", 50000, 1),
    ("Salesperson", 35000, 1),
    ("Lead Developer", 80000, 2),
    ("Junior Developer", 50000, 2),
    ("Warehouse Manager", 50000, 3),
    ("Warehouse Worker", 35000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ("John", "Doe", 1, null),
    ("Joyce", "Mcknight", 2, 1),
    ("Savannah", "Bush", 2, 1),
    ("Jerry", "Christensen", 3, null),
    ("Marco", "Fritz", 4, 4),
    ("Lucinda", "Summers", 4, 4),
    ("Mark", "Rios", 5, null),
    ("Patsy", "Fields", 6, 7),
    ("Nicholas", "Berry", 6, 7);