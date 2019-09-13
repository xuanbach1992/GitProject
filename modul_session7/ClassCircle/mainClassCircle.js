function Circle(radius) {
    this.radius1 = radius;

    this.getRadius = function () {
        return this.radius1;
    };
    this.getArea = function () {
        return this.radius1 * this.radius1 * Math.PI
    };
    this.setRadius = function (radius) {
        this.radius = radius;
    };
}
let hinhtron=new Circle(4);
hinhtron.setRadius(2);
console.log("radius: " +hinhtron.getRadius()+ "; area: " + hinhtron.getArea());