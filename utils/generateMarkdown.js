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
  return `# ${data.title}

## Table of Contents
  
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Contributing](#Contributing)
  6. [Tests](#Tests)
  7. [Questions?](#Questions?)



## Description

  ${data.description}
  


## Installation
  
  ${data.installation}



## Usage
  
  ${data.usage}



## License
  
  License Type: ${data.license}

  License Info: 



## Contributing
  
  ${data.contributing}


  
## Tests
  
  ${data.tests}



## Questions?
  
  GitHub: ${data.github}

  Email: ${data.email}

  Additional Contact Info: ${data.contact}

`;
}

module.exports = generateMarkdown;
