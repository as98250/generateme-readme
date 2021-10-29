const questions = [
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
},
{
    type: 'input',
    message: [
        'What was your motivation and what did you learn?'
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
    message: 'Please provide an usage instructions?',
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
        'GNU GPLv3',
        'Apache',
        'ISC'
    ]
}

];
module.exports = questions;