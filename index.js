// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

inquirer.prompt(questions).then((response) => {
    generateMarkdown(response);
    fs.writeFile('README.md', generateMarkdown(response), 'utf-8', (err) => {
        if (err) return console.log(err);
        console.log('Success!')
    });
  });
