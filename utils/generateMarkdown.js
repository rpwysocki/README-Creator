// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return 'None';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return `\n* [License](#license)\n`;
  }
  else if (license == 'MIT') {
    return `\n* [MIT](https://opensource.org/license/mit-0/)\n`
  }
  return 'None';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
  if (license == 'None') {
    return '## License: None';
  }
  else if (license == 'MIT') {
    return `## License:
    This project is licensed under the${renderLicenseLink(license)}license.`
  }
  
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection};