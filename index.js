// Packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const { default: Choices } = require('inquirer/lib/objects/choices');

const err = (err) => {
    if (err) throw err;
};


// Questions for user input


inquirer.prompt([
    {
        name: 'title',
        message: 'Please enter your project title.'
    },
    {
        name: 'description',
        message: 'Enter the project description.'
    },
    {
        name: 'installation',
        message: 'Please enter installation instructions.'
    },
    {
        name: 'usage',
        message: 'Please enter the purpose of the project.'
    },
    {
        name: 'license',
        message: 'Please choose a license.',
        type: 'list',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Boost Software License 1.0']
    },
    {
        name: 'contributions',
        message: 'Enter contribution guidelines here.',
    },
    {
        name: 'testing',
        message: 'Please enter any testing information.',
    },
    {
        name: 'questions',
        message: 'Enter your Github username.',
        message: 'Enter a valid email address.',
    }


]).then(({ title, description, installation, usage, license, contributions, testing, questions }) => {
    const readMe = `
 ## Title: ${title}
 # Description: ${description}
 # Installation: ${installation}
 # Usage: ${usage}
 # License: ${license}
 # Contributions: ${contributions}
 # Testing: ${testing}
 # Questions: ${questions}
    `
    fs.writeFile('./README.md', readMe, err);
});

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    console.log('Initializing app');
}

// Function call to initialize app
// init();


// Description, Installation, Usage, License, Contributing, Tests, and Questions