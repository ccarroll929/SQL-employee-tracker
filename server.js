// Acquiring dependencies
const db = require('./config/connection.js');
const { displayTitleText } = require('./lib/titleText.js');
const selectTask = require('./lib/selectTask.js');

// Start application if no errors
db.connect(function (err) {
  if (err) throw err;
  init();
});

// Display title text and prompt list
function init() {
  displayTitleText();
  selectTask();
};