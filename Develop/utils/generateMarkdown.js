// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License](https://img.shields.io/badge/license-MIT-brightgreen?style=plastic.svg)'
  } else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/license-Apache-brightgreen?style=plastic.svg)'
  } else if (license === 'The Unlicense') {
    return '![License](https://img.shields.io/badge/license-TheUnlicense-brightgreen?style=plastic.svg)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://img.shields.io/badge/license-MIT-brightgreen?style=plastic'
  } else if (license === 'Apache') {
    return 'https://img.shields.io/badge/license-Apache-brightgreen?style=plastic'
  } else if (license === 'The Unlicense') {
    return 'https://img.shields.io/badge/license-TheUnlicense-brightgreen?style=plastic'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== null) {
    return '## License'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  [Description](#description)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

[${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

If you have any questions, I can be contacted at the following links:

[Github](https://www.github.com/${data.github})

[Email](${data.email})
`
};


module.exports = generateMarkdown;
