const inquirer = require('inquirer');
const prompts = require('./prompts.js');
const handleTask = require('./handleTask.js');

// Function to show prompt list after completing each task
function selectTask() {
    inquirer.prompt(prompts)
    .then((response => {
        handleTask(response)
    }))
    .catch(err => {
        console.log(err)    
    })
};

module.exports = selectTask;