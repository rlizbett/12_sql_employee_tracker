//const variables->requires
const inquirer = require("inquirer");
const mysql = require('mysql2');
const consoleTable = require('console.table');
const { fetchAsyncQuestionProperty } = require("inquirer/lib/utils/utils");

//connect to db below
const dbase = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'mypass',
        database: 'managment_db'
    },
    console.log(`Connected to mamagment_db database.`)
);
dbase.connect((err) => {
    if (err) throw err;
    userQuestion();
});

//function for: userQuestion  
function userQuestion() {
    inquirer.prompt([
        {
            name: 'questions',
            type: 'list',
            message: 'Choose what you would like to do.',
            choices: [
                'View all departments',
                'View all roles',
                'View all emplyees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role']
        },
    ])
        .then((response) => {
            if (response.userQuestion == 'View all departments') {
                viewAllDepartments();
            } else if (response.userQuestion == 'View all roles') {
                viewAllRoles();
            } else if (response.userQuestion == 'View all emplyees') {
                viewAllEmployees();
            } else if (response.userQuestion == 'Add a department') {
                addADepartment();
            } else if (response.userQuestion == 'Add a role') {
                addARole();
            } else if (response.userQuestion == 'Add an employee') {
                addAnEmployee();
            } else //(response.userQuestion == 'Update an employee role')//
            {
                updateAnEmployee();
            }
        });
}

//function for: view all departments
function viewAllDepartments() {
    const sql = `Select * From Department`;
    dbase.query(sql, (err, result) => {
        if (err) throw err
        console.table(result)
        userQuestion();
    })
}

//function for: view all roles
function viewAllRoles() {
    const sql = `Select * From role`;
    dbase.query(sql, (err, result) => {
        if (err) throw err
        console.table(result)
        userQuestion();
    })
}

//function for: view all employees
function viewAllEmployees() {
    const sql = `Select * From Employees`;
    dbase.query(sql, (err, result) => {
        if (err) throw err
        console.table(result)
        userQuestion();
    })
}

//function for: add a department
function addADepartment() {
    inquirer.prompt([
        {
            name: 'depart_name',
            type: 'input',
            message: 'What department would you like to add?'
        }
    ])
        .then((response) => {
            const sql = `INSERT INTO department (name) VALUES (?)`;
            dbase.query(sql, (err, result) => {
                if (err) throw err
                console.table(result)
                userQuestion();
            });
        });
}

//function for: add a role
function addARole() {
    inquirer.prompt([
        {
            name: 'role_name',
            type: 'input',
            message: 'What role would you like to add?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of this role?'
        },
        {
            name: 'dept_name',
            type: 'input',
            message: 'What department is this role in?',
            choices: 'departments'
        }
    ])
        .then((response) => {
            const sql = `INSERT INTO role SET ? `;
            dbase.query(sql, (err, result) => {
                if (err) throw err
                console.table(result)
                userQuestion();
            });
        });
}

//function for: add employees
function addAnEmployee() {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Employees first name?',
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Employees last name?',
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'What is the employees role?',
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'What is the manager id?',
        }
    ])
        .then((response) => {
            const sql = `Insert into employee set?`;
            dbase.query(sql, response, (err, result) => {
                if (err) throw err
                console.log(result);
                userQuestion();
            });
        });
}

//function for: update an employee
function updateAnEmployee() {
    inquirer.prompt([
        {
            name: 'employee',
            type: 'input',
            message: 'Which employee would you like to update?'
        },
        {
            name: 'role',
            type: 'input',
            message: 'What is the employees new role?'
        }
    ])
        .then((response) => {
            const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
            dbase.query(sql, response, (err, result) => {
                if (err) throw err
                console.log(result);
                userQuestion();
            });
        });
}

