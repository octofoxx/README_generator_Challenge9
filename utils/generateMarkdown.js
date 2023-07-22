// function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } 
  else 
  {
    return '';
  }
}


// function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `[${license}](https://opensource.org/licenses/${license})`;
  } 
  else 
  {
    return '';
  }
}

// function that returns the license section of README
// if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## [License](#table-of-contents)
  
  The application is covered under the following license:
  
  ${renderLicenseLink(license)}`;
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
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)

## [Installation](#table-of-contents)

  ${data.installation}

## [Usage](#table-of-contents)
  
  ${data.usage}

${renderLicenseSection(data.license)}  

## [Credits](#table-of-contents)
  
  ${data.credits}

## [Tests](#table-of-contents)
  
  ${data.test}

## [Questions](#table-of-contents)

  IF you would like to contribute to the project, have any questions, or just general feedback please contact via:
  
  [GitHub](https://github.com/${data.github})

  or:
  
  [Email: ${data.email}](mailto:${data.email})  
`;
}

module.exports = generateMarkdown;
