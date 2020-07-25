// function to generate markdown for README
function generateMarkdown(answers) {
  let md = "";
  md += `# ${answers.project}`;
  md += "\n\n";
  let license = "There is no license";
  if (answers.license !== "None") {
    if (answers.license.split(" ").length > 1) {
      license = answers.license.split(" ").join("%20");
    }
    license = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  md += license;
  md += "\n\n";
  md += "## Description";
  md += "\n\n";
  md += `${answers.description}`;
  md += `\n\n`;
  md += `## Table of Contents`;
  md += `* [Installation](#installation)`;
  md += `\n\n`;
  md += `* [Usage](#usage)`;
  md += `\n\n`;
  md += `* [License](#license)`;
  md += `\n\n`;
  md += `* [Contribution](#contribution)`;
  md += `\n\n`;
  md += `* [Test](#test)`;
  md += `\n\n`;
  md += `* [Questions](#questions)`;
  md += "\n\n";
  md += "## Installation";
  md += "\n\n";
  md += "To install necessary dependencies, run the following command:";
  md += "\n\n";
  md += `${answers.dependencies}`;
  md += "\n\n";
  md += `## Usage`;
  md += `\n\n`;
  md += `${answers.repo}`;
  md += `\n\n`;
  md += "## License";
  md += `\n\n`;
  if (answers.license == "None") {
    md += "This project does not use a license";
  } else {
    md += `This project is licensed under the ${answers.license} license.`;
  }

  md += `\n\n`;
  md += `## Contribution`;
  md += `\n\n`;
  md += `${answers.contribution}`;
  md += `\n\n`;
  md += `## Test`;
  md += `\n\n`;
  md += `${answers.test}`;
  md += `\n\n`;
  md += `## Questions`;
  md += `\n\n`;
  md += `If you have any questions please email ${answers.email}`;

  return md;
}

module.exports = generateMarkdown;
