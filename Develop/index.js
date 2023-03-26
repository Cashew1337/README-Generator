// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter how to use your project.',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['Apache', 'MIT', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        message: 'Enter how to contribute to your project.',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter test insturctions for your project.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Please enter your Github username.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your email.',
        name: 'email'
    }
]
;

// TODO: Create a function to write README file
function writeToFile(answers) {
    console.log(answers);
    fs.writeFile('README.md', answers, (err) => err ? console.error(err) : console.log('README generated successfully'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile(generateMarkdown(answers))
    })
};

// Function call to initialize app
init();
