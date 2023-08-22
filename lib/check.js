// Import tests for shapes
const {Triangle, Square, Circle} = require('./shapes');
const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile)

readFromFile('./lib/test.json').then((data) => {
    result = JSON.parse(data)[0];
    // const triangleContent = new Triangle(result.textColor,result.text,result.shapeColor,result.color);
    // console.log(result.textColor)
    const triangleContent = new Triangle(result);
    
    console.log(triangleContent.render())


})



        // const triangleContent = new Triangle(triangleData.textColor,triangleData.text,triangleData.shapeColor,triangleData.color);
//           `
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <g>
//     <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
//     <text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>
//   </g>    
// </svg>
// `
//           );
//       });
// });