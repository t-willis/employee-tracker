USE employee_db;

INSERT INTO departments (name) VALUES
    ("Sales"),
    ("Development"),
    ("Warehouse");

INSERT INTO roles (title, salary, department_id) VALUES
    ("Sales Lead", 40000, 1),
    ("Lead Developer", 80000, 2),
    ("Warehouse Manager", 50000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ("John", "Doe", 1, null),
    ("Henry", "Weaver", 1, 1),
    ("Gary", "Crockett", 1, 1); 