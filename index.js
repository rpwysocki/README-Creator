// Packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
const {renderLicenseBadge, renderLicenseLink, renderLicenseSection} = require('./utils/generateMarkdown')

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
        choices: ['None','MIT', 'Apache_2.0', 'GNU_v3.0', 'Boost_Software_1.0']
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
        message: 'Please refer to the Github profile - https://github.com/rpwysocki/README-Creator',
        
    }


]).then(({ title, description, installation, usage, license, contributions, testing, questions }) => {
    const readMe = `
# ${title}   ${renderLicenseBadge(license)}   
## Description: ${description}

## Table of contents:

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Testing](#testing)
6. [Questions](#questions)

## Installation: ${installation}
## Usage: ${usage}
${renderLicenseSection(license)}




## Contributions: ${contributions}
## Testing: ${testing}
## Questions: Please refer to the Github profile page - https://github.com/rpwysocki/README-Creator
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