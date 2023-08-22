// Import modules
const {Triangle, Square, Circle} = require('./shapes');



// A testing suite for Triangle svg.
describe('Triangle', () => {
      it('test the triangle svg logo generation', () => {
const obj = {
  textColor: 'red', 
  shapeColor: 'black', 
  text: 'abc'
}

          const triangleContent = new Triangle(obj);
          expect(triangleContent.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="black" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="red">abc</text></svg>`);
      })
  });


// // A testing suite for Square svg.
//   describe('Square', () => {
//     it('test the square svg logo generation', () => {
//       readFromFile('./lib/test.json').then((data) => {
//         const result = JSON.parse(data)[1];
//         const squareContent = new Square(result);
//         expect(squareContent.render()).toEqual(
//           `
//   <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//     <g>
//       <rect x="73" y="40" width="160" height="160" style="fill:black;" />
//       <text x="150" y="130" text-anchor="middle" font-size="40" fill="blue">def</text>
//     </g>    
//   </svg>
// `       );
//     });
//   });
// });


// // A testing suite for Circle svg.
// describe('Circle', () => {
//   it('test the circle svg logo generation', () => {
//     readFromFile('./lib/test.json').then((data) => {
//       const result = JSON.parse(data)[2];
//       const squareContent = new Circle(result);
//       expect(squareContent.render()).toEqual(
//         `
//   <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//     <g>
//       <circle cx="150" cy="115" r="80" stroke="black" fill="black"/>
//       <text x="150" y="130" text-anchor="middle" font-size="40" fill="green">ghi</text>
//     </g>
//   </svg>
// `       );
//     });
//   });
// });