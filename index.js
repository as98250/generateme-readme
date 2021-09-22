// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./utils/questions');




inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers));
  });



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
