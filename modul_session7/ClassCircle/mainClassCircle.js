function Circle(radius) {
    this.radius = radius;

    this.getRadius = function () {
        return this.radius;
    };
    this.getArea = function () {
        return this.radius * this.radius * Math.PI
    };
    this.setRadius = function (radius) {
        this.radius = radius;
    };
}
let hinhtron=new Circle(4);
// hinhtron.setRadius(2);
console.log("radius: " +hinhtron.getRadius()+ "; area: " + hinhtron.getArea());