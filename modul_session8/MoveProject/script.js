function Car(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.setSpeed = function (speed) {
    this.speed = speed;
  };
  this.getSpeed = function () {
    return this.speed;
  };
  this.getHeroElement  = function(){
    return `<img width="${this.size} "
        height="${this.size}"
        src="${this.image}"
        style="top:${this.top}px;left:${this.left}px;position:absolute;"/>`
  };
  this.moveRight = function(){
    this.left += this.getSpeed();
    console.log('right: ' + this.left);
  };
  this.moveLeft = () => {
    this.left -= this.getSpeed();
    console.log('down: ' + this.top);
  };
  this.moveUp = () => {
    this.top -= this.getSpeed();
    console.log('left: ' + this.left);
  };
  this.moveDown = () => {
    this.top += this.getSpeed();
    console.log('up: ' + this.top);
  };

}

let car = new Car('Car.png', 0, 0, 100);
car.setSpeed(5);
let maxWidth = window.innerWidth - car.size;
let maxHeight=window.innerHeight-car.size;
function start(){
  if (car.left < maxWidth && car.top === 0) {
    car.moveRight();
  } else if (car.left >= maxWidth && car.top < maxHeight) {
    car.moveDown();
  } else if (car.left >= 0 && car.top >= maxHeight) {
    car.moveLeft();
  } else if (car.left <= 0 && car.top >= 0) {
    car.moveUp();
  }
  document.getElementById('game').innerHTML = car.getHeroElement();
  requestAnimationFrame(start)
}

start();