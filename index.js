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
    name: 'credits',
    message: 'Please provide any credit information such as tutorials used, examples referenced, collaborators, etc.'
   },
   {
    type: 'input',
    name: 'test',
    message: 'Please provide any test information.'
   },
   {
    type: 'list',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['ISC', 'MIT', 'None',

    ],
   },
   {
    type: 'input',
    name: 'github',
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
