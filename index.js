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
dbase.connect((err) =>{
    if(err) throw err;
    userQuestion();
});

//userQuestion function below
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
        if(response.userQuestion == 'View all departments'){
            viewAllDepartments();
        }else if(response.userQuestion == 'View all roles'){
            viewAllRoles();
        }else if(response.userQuestion == 'View all emplyees'){
            viewAllEmployees();
        }else if(response.userQuestion == 'Add a department'){
            addADepartment();
        }else if(response.userQuestion == 'Add a role'){
            addARole();
        }else if(response.userQuestion == 'Add an employee'){
            addAnEmployee();
        }else //(response.userQuestion == 'Update an employee role')//
        {
            updateAnEmployee();
        }
    });
}

