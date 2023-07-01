// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
inquirer.prompt([
   {
    type: 'input',
    name: 'title',
    message: 'What is your project called?'
   },
   {
    type: 'input',
    name: 'description',
    message: 'Please give a description of your project.'
   },
   {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions. If none are needed, please type "N/A".'
   },
   {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information.'
   },
   {
    type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guidelines.'
   },
   {
    type: 'input',
    name: 'test',
    message: 'Please provide any test information.'
   },
   {
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license(s).',
    choices: ['ISC', 'MIT', 'Mozilla Public License 2.0', 'GNU General Public License v3.0',

    ],
   },
   {
    type: 'input',
    name: 'Github',
    message: 'Please provide your Github user name.'
   },
   {
    type: 'input',
    name: 'email',
    message: 'Please provide a contact email.'
   }
])
.then((answers)=> 
{
   const READMEContent = generateMarkdown(answers);
   
   fs.writeFile('newREADME.md', READMEContent, (err) =>
   err ? console.log(err) : console.log('Successfully created README!')
 );
});
/*
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(); */
