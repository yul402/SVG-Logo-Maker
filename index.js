const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Triangle, Square, Circle } = require('./lib/shapes');



// Prompt the user questions and save user input
function promptUser() {
  inquirer
    .prompt([
      //Logo text
      {
        type: "input",
        message: "What text would you like to put in logo (up to three characters)?",
        name: "text",
        validate: function (text) {
          // Check input text length
          const textLen = text.length;
          if (textLen > 3) {
            console.log("\nLogo text should ne no more than 3 characters")
            return false;
          } else {
            return true;
          }
        }
      },
      // Logo text color prompt
      {
        type: "input",
        message:
          "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      // Choose logo shape
      {
        type: "list",
        message: "What shape would you like the logo to be?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      // Choose shape color
      {
        type: "input",
        message:
          "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeColor",
      },
    ]).then((answers) => {
      // Calling write file function to generate SVG file
      writeToFile(answers);
    });
}

// Generate logo.svg in "examples" folder
function writeToFile( userAnswer) {
  let userShape;
  switch (userAnswer.shape) {
    case 'Triangle':
      userShape = new Triangle(userAnswer)
      break
    case 'Square':
      userShape = new Square(userAnswer)
      break
    case 'Circle':
      userShape = new Circle(userAnswer)
      break
  }

  fs.writeFile('./dist/logo.svg', userShape.render(), (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}


// Calling promptUser function so inquirer prompts fire off when application is ran
promptUser();