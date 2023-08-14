function generateSVG(answers){
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <g>
    ${getShape(answers)}
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
  </g>    
</svg>
`
};


function getShape(answers){
    switch(answers.shape) {
        case 'Triangle':
            return `<polygon points="150, 18 244, 182 56, 182" style="fill:${answers.shapeColor}"/>`
        case 'Square':
          return `<rect x="73" y="40" width="160" height="160" style="fill:${answers.shapeColor};" />`
        case 'Circle':
          return `<circle cx="150" cy="115" r="80" stroke="black" fill="${answers.shapeColor}"/>`
      }
};


module.exports = generateSVG;