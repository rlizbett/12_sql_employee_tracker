USE managment_db;

INSERT INTO department (name)
VALUES ("Engineering"), ("Finance"), ("Sales"), ("Legal");

INSERT INTO role (title,salary,department_id)
VALUES ("Engineer Manager", 80, 1), ("Lead Sales", 65, 2), ("Sales Rep", 75, 3), ("Legal Manager", 92, 4);

INSERT INTO employee (fist_name, last_name, role_id, manager_id)
VALUES ("Ben", "Sand", 1, 4), ("Jerry", "Riv", 3, 4), ("Jackie", "Gar", 3, 4), ("Liz", "Riv", 4, 4);