// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } 
  else 
  {
    return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `[${license}](https://opensource.org/licenses/${license})`;
  } 
  else 
  {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
## [License](#table-of-contents)
  
    The application is covered under the following license:
  
  ${renderLicenseLink(license)}
    `;
  } 
  else 
  {
    return ' ';
  }
}

// Function that returns license in table of contents
// If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'none') {
    return `* [License](#license)`;
  } 
  else 
  {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

  ${data.description}

## Table of Contents
  
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## [Installation](#table-of-contents)

  ${data.installation}

## [Usage](#table-of-contents)
  
  ${data.usage}

${renderLicenseSection(data.license)}  

## [Contributing](#table-of-contents)
  
  ${data.contribution}

## [Tests](#table-of-contents)
  
  ${data.test}

## [Questions](#table-of-contents)

  For any questions, please contact via:
  
  [GitHub](https://github.com/${data.github})

  or:
  
  [Email: ${data.email}](mailto:${data.email})  
`;
}

module.exports = generateMarkdown;
