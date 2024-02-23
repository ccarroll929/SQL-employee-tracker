// Acquiring dependencies
const db = require('./config/connection.js');

// Start application and handle any errors
db.connect(function (err) {
    if (err) throw err;
    init();
});