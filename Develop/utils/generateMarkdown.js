// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === MIT) {
    return 'https://img.shields.io/badge/license-MIT-brightgreen?style=plastic'
  } else if (license === Apache) {
    return 'https://img.shields.io/badge/license-Apache-brightgreen?style=plastic'
  } else if (license === 'The Unlicense') {
    return 'https://img.shields.io/badge/license-TheUnlicense-brightgreen?style=plastic'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, usage, license, contribution, tests, github, email}) =>
  `# ${title}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributing

${contribution}

## Tests

${tests}

## Questions

If you have any questions, I can be contacted at the following links:
[Github](https://www.github.com/${github})

[Email](${email})
`;


module.exports = generateMarkdown;
