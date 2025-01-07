// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
      return ''; // Return an empty string if no license is provided
  }
  switch (license) {
      case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
          return '[![License: GPL 3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'BSD 3':
          return '[![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      default:
          return ''; // Return an empty string for unknown licenses
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
      return ''; // Return an empty string if no license is provided
  }

  switch (license) {
      case 'MIT':
          return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
          return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
      case 'BSD 3':
          return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
      default:
          return ''; // Return an empty string for unknown licenses
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
      return ''; // Return an empty string if no license is provided
  }
  const badge = renderLicenseBadge(license); // Call the function to get the license badge
  const link = renderLicenseLink(license);   // Call the function to get the license link

  return `
## License
${badge}

This project is licensed under the ${license} license.  
For more details, see the [license details](${link}).
  `.trim(); // Trim to remove any extra whitespace
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please reach out to me at [${data.email}](mailto:${data.email}) or find me on GitHub: [${data.github}](https://github.com/${data.github}).
`;
}

export default generateMarkdown;
