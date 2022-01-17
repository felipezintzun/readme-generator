const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        type:"input",
        name:"Title",
        message:"enter project title",
    },

    {
        type:"input",
        name:"description",
        message:"enter project description",
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
        name:"installation",
        message:"enter steps required to install project",
    },
    
    {
        type:"input",
        name:"tests",
        message:"provide examples of how to run application",
    },

    {
        type:"input",
        name:"contributors",
        message:"enter contributors",
    },

    {
        type:"list",
        choices:["MIT", "ISC", "APACHE 2.0", "GPL", "NONE"],
        name:"license",
        message:"select license type",
    },

    
]).then(function({Title, description, GitHub, email, usage, installation, tests, contributors, license}){
    var readMeContent = `
# title:${title}
## description:${description}

### table of contents

* [GitHub](#GitHub)
* [email](email)
* [usage](#usage)
* [installation](#installation)
* [tests](#tests)
* [contributors](#contributors)
* [license](#license)

#### GitHub Profile
[GitHub](https://github.com/${GitHub})

#### Email:
${email}

#### Usage:
${usage}

#### Installation:
${installation}

#### Tests:
${tests}

#### Contributors:
${contributors}

#### License:
${license}
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)

`
console.log(readMeContent)
fs.writeFileSync("README.md", readMeContent, (error)=>{
    if (error) throw error
})
console.log("readme-generator")
});