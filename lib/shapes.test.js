// Import tests for shapes
const {Triangle, Square, Circle} = require('./shapes');
const fs = require('fs');

fs.readFile('./lib/test.json', (err, data) => {
  if (err) throw err;
  const result = JSON.parse(data);
  // console.log(result[0].text);
});

// A testing suite for Arithmetic is created.
describe('Triangle', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
      it('test the triangle svg logo generation', () => {
        const triangleData = result[0];
        const triangleContent = new Triangle(triangleData.textColor,triangleData.text,triangleData.shapeColor,triangleData.color);
        
        expect(triangleContent).toEqual(
          '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'

        
        );
      });
});