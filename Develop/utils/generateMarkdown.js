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
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'The Unlicense') {
    return 'http://unlicense.org/'
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

function renderLicenseToc(license) {
  if (license !== null) {
    return '[License](#license)'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

  ## Table of Contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  ${renderLicenseToc(data.license)}

  [Contribution](#contribution)

  [Tests](#test)
  
  [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

If you have any questions, I can be contacted at the following links:

[Github](https://www.github.com/${data.github})

[Email](mailto:${data.email})
`
};


module.exports = generateMarkdown;
