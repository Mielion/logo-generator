// delcaring shape class for generating different shapes
class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}

// different shapes inhereting shape object

class Triangle extends Shape{
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"></polygon>`;
  }
}

class Circle extends Shape{
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape{
  render() {
    return `<rect x="70" y="40" width="100%" height="160" fill="${this.color}"/>`;
  }
}

module.exports = { Triangle, Circle, Square };
