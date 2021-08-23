// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title that you would like to give to this ReadME?"
    },
    {
        name: "description",
        type: "input",
        message: "Please enter a description of your application for your README:"
    },
    {
        name: "installation",
        type: "input",
        message: "Please enter the steps that users must follow when installing your application:"
    },
    {
        name: "usage",
        type: "input",
        message: "Please enter the important usage information for your application:"
    },
    {
        name: "license",
        type: "list",
        message: "Please select the kind of license that you used in creating your application.",
        choices: ["MIT","Apache-2.0", "BSD-2-Clause", "gpl-license", "MPL-2.0", "None"]
    },
    {
        name: "contributing",
        type: "input",
        message: "Please enter the guidelines that potential contributors to your application should follow:"
    },
    {
        name: "tests",
        type: "input",
        message: "Please enter the testing instructions for your application:"
    },
    {
        name: "github",
        type: "input",
        message: "Please paste the URL link to your GitHub account:"
    },
    {
        name: "email",
        type: "input",
        message: "Please enter your email address:"
    },
    {
        name: "contact",
        type: "input",
        message: "Please enter any additional instructions for someone to follow if they wish to contact you (times of the day, etc.):"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            // dataStringForFileBuilding = generateMarkdown(response)
            
            writeToFile("MyREADME.md", generateMarkdown({...response}))
        })

    
}

// Function call to initialize app
init();