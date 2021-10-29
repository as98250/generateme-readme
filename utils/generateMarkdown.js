// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'GNU GPLv3':
      return ``
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  # Title
  ${data.title}
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [License](#License)

  ##Description
  ${data.description}

  ##Installatoion
  ${data.installatoion}

  ##Usage
  ${data.usage}

  ##Contribution
  ${data.contribution}

  ##Test
  ${data.test}

  ##License
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
