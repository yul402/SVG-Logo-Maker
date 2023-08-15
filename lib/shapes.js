// Exports `Triangle`, `Circle`, and `Square` classes
class Shape{
  constructor(userAnswer){
    this.textColor = userAnswer.textColor;
    this.text = userAnswer.text;
    this.shapeColor = userAnswer.shapeColor;
    this.color = userAnswer.color;
  }
}

class Triangle extends Shape {
  constructor(textColor,text,shapeColor,color) {
    super(textColor,text,shapeColor,color);
    this.shape = 'triangle';
  }
  render() {
    // Returns triangle svg
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <g>
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>
  </g>    
</svg>
`
  }
}

class Square extends Shape {
  constructor(textColor,text,shapeColor,color) {
    super(textColor,text,shapeColor,color);
    this.shape = 'Square';
  }
    
  render() {
    // Returns square svg
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect x="73" y="40" width="160" height="160" style="fill:${this.shapeColor};" />
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>
  </g>    
</svg>
`
  }
}

class Circle extends Shape {
  constructor(textColor,text,shapeColor,color) {
    super(textColor,text,shapeColor,color);
    this.shape = 'Circle';
  }
    
  render() {
    // Returns circle svg
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <g>
    <circle cx="150" cy="115" r="80" stroke="black" fill="${this.shapeColor}"/>
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text>
  </g>    
</svg>
`
  }
}

module.exports = { Shape,Triangle, Square, Circle };

// function generateSVG(answers){
//     return `
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <g>
//     ${getShape(answers)}
//     <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
//   </g>    
// </svg>
// `
// };


// function getShape(answers){
//     switch(answers.shape) {
//         case 'Triangle':
//             return `<polygon points="150, 18 244, 182 56, 182" style="fill:${answers.shapeColor}"/>`
//         case 'Square':
//           return `<rect x="73" y="40" width="160" height="160" style="fill:${answers.shapeColor};" />`
//         case 'Circle':
//           return `<circle cx="150" cy="115" r="80" stroke="black" fill="${answers.shapeColor}"/>`
//       }
// };


// module.exports = generateSVG;