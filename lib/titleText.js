const db = require('../config/connection.js');

// Text that displays when application starts
function displayTitleText() {
    console.log('EMPLOYEE TRACKER');
};

function displayExitText() {
    console.log('GOODBYE'); 
};

module.exports = { displayTitleText, displayExitText };