class Shape{
  constructor(userAnswer){
    this.textColor = userAnswer.textColor;
    this.text = userAnswer.text;
    this.shapeColor = userAnswer.shapeColor;
  }
}

// Triangle: Inherited from Shape
class Triangle extends Shape {
  render() {
    // Returns triangle svg
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

// Square: Inherited from Shape
class Square extends Shape {
  render() {
    // Returns square svg
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" style="fill:${this.shapeColor};" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

// Circle: Inherited from Shape
class Circle extends Shape {
  render() {
    // Returns circle svg
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" stroke="black" fill="${this.shapeColor}"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

module.exports = { Shape,Triangle, Square, Circle };