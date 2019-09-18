let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let Solied = function (name, power, health,position) {
    //this.name = name;
    this.power = power;
    this.health = health;
    this.positon=position;

    this.setPower = function (power) {
        this.power = power;
    };
    this.setHealth = function (health) {
        this.health = health;
    };
    this.getPower = function () {
        return this.power
    };
    this.getHealth = function () {
        return this.health;
    };
    this.attack = function (human) {
        human.health -= this.power;
    };
};
let Position = function (x, y) {
    this.xPosition = x;
    this.yPosition = y;

    this.getXPosition = function () {
        return this.xPosition;
    };
    this.getYPosition = function () {
        return this.yPosition;
    };

};
let human1 = new Solied("a", 12, 300);
let human2 = new Solied("b", 10, 200);

function drawImg(human) {
    let imgChar1 = new Image(80, 100);
    imgChar1.src = "imgs/char2_2.png";
    // let imgChar2 = new Image(80, 100);
    // imgChar2.src = "imgs/char2_2.png"
    ctx.drawImage(imgChar1, 50, 100);
    // ctx.drawImage(imgChar2, 100, 100);
    ctx.beginPath();
    ctx.rect(20, 20, 220, 20);
    ctx.fillStyle = "#FF0000";
    ctx.strokeStyle = "#000000"
    ctx.stroke();
    ctx.fill();
}

function start() {
    drawImg();
}

function attack() {
    human1.attack(human2);
}