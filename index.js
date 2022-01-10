const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"enter project title",
    },

    {
        type:"input",
        name:"description",
        message:"enter project description",
    },

    {
        type:"list",
        choices:["MIT", "ISC", "APACHE 2.0", "GPL", "NONE"],
        name:"license",
        message:"select license type",
    },

    {
        type:"input",
        name:"GitHub",
        message:"enter GitHub name",
    },

    {
        type:"input",
        name:"email",
        message:"enter email address",
    },

    {
        type:"input",
        name:"usage",
        message:"enter usage",
    },

    {
        type:"input",
        name:"contributors",
        message:"enter contributors",
    },

    {
        type:"input",
        name:"installation",
        message:"enter steps required to install project",
    },

    {
        type:"input",
        name:"tests",
        message:"provide examples of how to run application",
    },
]).then(function({title, description, license, GitHub, email, usage, contributors, installation, tests}){
    var readMeContent = `
# title:${title}
## description:${description}

### table of contents
* [installation](#installation)
* [license](#license)
* [GitHub](#GitHub)
* [email](email)
* [usage](#usage)
* [contributors](#contributors)
* [installation](#installation)
* [tests](#tests)
#### installation
${installation}
#### license:${license}
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
`
console.log(readMeContent)
fs.writeFileSync("README.md", readMeContent, (error)=>{
    if (error) throw error
})
console.log("readme-generator")
})