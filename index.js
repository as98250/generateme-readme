// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'name'
    },
    {
        type: 'input',
        message: [
            'What was your motivation?',
            'Why did you build this project?',
            'What problem does it solve?',
            'What did you learn?'
        ],
        name: 'description'
    },
    {
        type: 'input',
        message: 'Are there any installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'PLease provide an usage instructions?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Are there any contribution guidlines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'How can the user run a test?',
        name: 'test'
    },
    {
        type: 'checkbox',
        message: 'What licensing would you like to use?',
        name: 'license',
        choices: [
            'MIT',
            'GNU CPLv3',
            'Apache',
            'Mosilla Public License 2.0'
        ]
    }

];

inquirer.prompt(questions).then(answers); console.log(JSON.stringify(answers));

// TODO: Create a function to write README file
function writeToFile(name, description) {
    console.log(writeToFile);
}
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
