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
        name: "email",
        type: "input",
        message: "What is your email address?"
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
            dataStringForFileBuilding = generateMarkdown(response)

            writeToFile("TEST.md", dataStringForFileBuilding)
        })
}

// Function call to initialize app
init();
