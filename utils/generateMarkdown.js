// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'GNU GPLv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    default:
      return
  }

 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`
    case 'GNU GPLv3':
      return `https://www.gnu.org/licenses/gpl-3.0`
    case 'Apache':
      return `https://opensource.org/licenses/Apache-2.0`
    case 'ISC':
      return `https://opensource.org/licenses/ISC`
    default:
      return
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
switch (license) {
  case (license ==='MIT' || license ==='IPL 1.0' || license ==='MPL 2.0'):
    return `## License ${license} ${renderLicenseLink(data.license)}
    ${renderLicenseBadge(data.license)}`
}

}

// //TODO: Create a function to loop through description
// function generatDescription(questions) {
//   const question = questions.messege;
//   for (let i = 0; i < question.length; i++) {
//     if(data.description)
//     return question
//   }

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [License](#License)

  ## Description
  
  ${data.description}

  ## Installatoion
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
