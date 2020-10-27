// Create a class called Circle. It should have one property called radius.

class Circle {
     constructor(radius) {
         this.radius = radius;
     }

     getDiameter() {
         return 2 * this.radius;
     }

     getCircumference() {
         return 2 * this.radius * Math.PI;
     }

     getArea() {
         return Math.pow(this.radius, 2) * Math.PI;
     }
}

const circleTen = new Circle(10);
console.log(circleTen.getDiameter()); //20
console.log(circleTen.getCircumference()); //62.83185307179586
console.log(circleTen.getArea()); //314.1592653589793

const circleSeven = new Circle(7);
console.log(circleSeven.getDiameter()); //14
console.log(circleSeven.getCircumference()); //43.982297150257104
console.log(circleSeven.getArea()); //153.93804002589985

const circleTwelve = new Circle(12);
console.log(circleTwelve.getDiameter()); //24
console.log(circleTwelve.getCircumference()); //75.39822368615503
console.log(circleTwelve.getArea()); // 452.3893421169302