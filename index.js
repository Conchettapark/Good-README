const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "project",
    message: "What is your project name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    default: "Use Arrow Keys",
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to run test?",
    default: "npm test",
  },
  {
    type: "input",
    name: "repo",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?",
  },
];
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  let markdown = generateMarkdown(answers);
  writeToFile(markdown);
});
// .catch((error) => {
//   if (error) {
//     console.log("try again");
//     console.log(error);
// } else {
//   // Something else when wrong
//   }
// });

// function to write README file
function writeToFile(data) {
  fs.writeFileSync("new_README.md", data);
}

// function to initialize program
//function init() {}

// function call to initialize program
//init();
