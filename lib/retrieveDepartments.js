const db = require('../config/connection.js');

// Function to display all department options
async function retrieveDepartments(response) {
    let departmentList;
    let returnedValue = await db.promise().query(`
    SELECT * FROM department
    `).then( (data) => {
        departmentList = data[0].map(data => {
            return {
                name: data.name,
                value: data.id
            }
        })
        return departmentList
    }).catch(err=>{
        console.log(err);
    })
    return returnedValue
};

module.exports = retrieveDepartments;