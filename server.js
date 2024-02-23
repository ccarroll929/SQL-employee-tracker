// Acquiring dependencies
const sequelize = require('./config/connection.js');
const { displayTitleText } = require('./lib/titleText.js');
const selectTask = require('./lib/selectTask.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3306;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Turn on connection to db and server
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
    displayTitleText();
    selectTask();
  });