const drawElement = document.getElementById('MyCanvas').getContext("2d");

function Rectangle(width, height) {

    this.width = width;
    this.height = height;

    this.setWidth = function (width) {
        this.width = width;
    };
    this.setHeight = function (height) {
        this.height = height;
    };
    // this.getDrawElement=function () {
    // };
    this.getWidth = function () {
        return this.width
    };
    this.getHeight = function () {
        return this.height
    };
    this.getPerimeter = function () {
        return (this.width + this.height) * 2
    };
    this.getAcreage = function () {
        return this.width * this.height
    };
    this.drawRectangle = function () {
        // let x = Math.floor(Math.random() * window.innerHeight);
        // let y = Math.floor(Math.random() * window.innerWidth);
        drawElement.beginPath();
        drawElement.rect(100, 100, this.height, this.width);
        // drawElement.fillStyle = "red"
       // drawElement.fill();
        drawElement.lineWidth = 1;
        drawElement.strokeStyle = 'red';
        drawElement.stroke();
    };
    this.print = function () {
        alert("Chu vi hình chữ nhật: " + this.getPerimeter());
        alert("diện tích hình chữ nhật là: " + this.getAcreage());
    };
}

let square = new Rectangle();
square.setHeight(40);
square.setWidth(30);
square.print();
square.drawRectangle();