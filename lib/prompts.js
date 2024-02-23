// Acquiring dependencies
const retrieveDepartments = require('./retrieveDepartments');
const retrieveRole = require('./retrieveRole');
const retrieveEmployee = require('./retrieveEmployee');

// Inquirer prompts
const prompts = [
    // **********TASK**********
    {
        name: 'task',
        type: 'list',
        message: 'SELECT TASK:',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'EXIT']
    },

    // **********Add a department**********
    {
        name: "department",
        type: "input",
        message: "ENTER NEW DEPARTMENT NAME:",
        when: (response) => {
            if (response.task === 'Add a department') {
                return true;
            } 
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('Please enter valid input');
            }
            return true;
        }
    },

    // **********Add a role**********
    {
        name: "roleTitle",
        type: "input",
        message: "ENTER NEW ROLE TITLE:",
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            } 
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('Please enter valid input');
            }
            return true;
        }
    },
    {
        name: "roleSalary",
        type: "input",
        message: "ENTER ROLE SALARY:",
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            } 
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('Please enter valid input');
            }
            return true;
        }
    },
    {
        name: "roleDepartment",
        type: "list",
        message: "SELECT ROLE DEPARTMENT:",
        // Using retrieveDepartments.js function to display current departments in database
        choices: retrieveDepartments,
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            } 
            return false;
        }
    },

    // **********Add an employee**********
    {
        name: "employeeFirstName",
        type: "input",
        message: "ENTER FIRST NAME:",
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            } 
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('Please enter valid input');
            }
            return true;
        }
    },
    {
        name: "employeeLastName",
        type: "input",
        message: "ENTER LAST NAME:",
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            } 
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('Please enter valid input');
            }
            return true;
        }
    },
    {
        name: "employeeRole",
        type: "list",
        message: "SELECT EMPLOYEE ROLE:",
        // Using retrieveRole.js to display current roles in database
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            } 
            return false;
        },
    },
    {
        name: "employeeManager",
        type: "list",
        message: "SELECT EMPLOYEE MANAGER:",
        // Using retrieveEmployee.js function to display current employees in database to select as manager
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            } 
            return false;
        },
    },

    // **********Update an employee role**********
    {
        name: "updateEmployee",
        type: "list",
        message: "SELECT EMPLOYEE:",
        // Using retrieveEmployee.js function to display current employees in database
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Update an employee role') {
                return true;
            } 
            return false;
        },
    },
    {
        name: "updateRole",
        type: "list",
        message: "SELECT NEW ROLE:",
        // Using retrieveRole.js to display current roles in database to update
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Update an employee role') {
                return true;
            } 
            return false;
        },
    },
];

module.exports = prompts;