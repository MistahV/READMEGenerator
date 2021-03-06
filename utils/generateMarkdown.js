// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const license = data.license
// // console.log(license);

// function renderLicenseBadge(license) {
//   if (license = "MIT") {
//     return license
//   } else if (license = "Apache 2.0") {
//     return license
//   } else if (license = "BSD") {
//     return license
//   } else  if (license = "GPL") {
//     return license
//   } else  if (license = "Mozilla Public 2.0") {
//     return license
//   } else {
//     return ''
//   }
// };
// TODO: Create a function that returns the license link
// If there is no license, return an empty string



function renderLicenseLink(license) {
  if (license = "None") {
    return ''
  } else {
  let licenseLink = `https://opensource.org/licenses/${license}`
  return licenseLink
 }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//STILL NEEED TO FINISH THIS FUNCTION - ONLY WORKS CORRECTLY WITH MIT LICENSE....
function renderLicenseSection(license) {
  if (license = "MIT") {
          let licenseInfo = "Copyright <YEAR> <COPYRIGHT HOLDER> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
          return licenseInfo
      } else if (license ="Apache-2.0") {
          let licenseInfo = "  Copyright [yyyy] [name of copyright owner] Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License."
          return licenseInfo
      } else if (license = "BSD-2-Clause") {
          let licenseInfo = "Copyright <YEAR> <COPYRIGHT HOLDER> Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:  1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."
          return licenseInfo

      }
      // } else  if (license = "gpl-license") {
      //   return license
      // } else  if (license = "MPL-2.0") {
      //   return license
      // } 
      else {
        return ''
      }
    }


    
function generateMarkdown(data) {
  return `# Application Title: ${data.title}

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

  License Link: ${renderLicenseLink(data.license)}

  License Info: ${renderLicenseSection(data.license)}

 

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
