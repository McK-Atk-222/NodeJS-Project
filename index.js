// // TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

import generateMarkdown from './utils/generateMarkdown.js';

// // TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user need to know about contributing to the repo',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'what command should be run to run tests?',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Please select a license:',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email:',
    },
  ])
  .then((data) => {
    const ReadmeContent = generateMarkdown(data);

   // // TODO: Create a function to write README file
    fs.writeFile('README.md', ReadmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

// // TODO: Create a function to initialize app
//function init() {}

// // Function call to initialize app
//init();
