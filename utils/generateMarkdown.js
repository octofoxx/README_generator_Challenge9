// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

  ${data.description}

## Table-of-Contents
  
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)

## [Installation](#table-of-contents)

  ${data.installation}

## [Usage](#table-of-contents)
  
  ${data.usage}

## [Contribution](#table-of-contents)
  
  ${data.contribution}

## [Testing](#table-of-contents)
  
  ${data.test}

## [Questions](#table-of-contents)

  For any questions, please contact via:
  
  [GitHub](https://github.com/${data.github})

  or:
  
  [Email: ${data.email}](mailto:${data.email})  
`;
}

module.exports = generateMarkdown;
