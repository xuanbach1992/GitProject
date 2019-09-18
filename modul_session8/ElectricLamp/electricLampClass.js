let ElectricLamp = function (status) {
    this.status = false;

    this.getStatus = function () {
        return this.status;
    };
    this.turnOn=function () {
        this.status = true;
        console.log("den bat");

    };
    this.turnOff = function () {
        this.status = false;
        console.log("tat dien");
    };
};

let SwitchButton = function () {

    this.status = false;
    this.lamp = ElectricLamp;

    this.switchOn = function () {
        this.status = true;
        console.log("bat cong tac");
        this.lamp.turnOn();
        drawLamp(true);
    };
    this.connect = function (lamp1) {
        this.lamp = lamp1;
    };
    this.switchOff = function () {
        this.sta
<img height="353" src="imgs/1.png" width="259"/>tus = false;
        this.lamp.turnOff();
        console.log("tat cong tac=> tat den");
        drawLamp(false);
    };

};

function drawLamp(status) {
    if (!status){
        let c=document.getElementById('myCanvas');
        let ctx=c.getContext("2d");
        ctx.beginPath();
        ctx.arc(120,50,40,0,2*Math.PI);
        ctx.clearRect(0,0,300,150);
        ctx.strokeStyle="#000000";
        ctx.stroke();
    }else {
        let c=document.getElementById('myCanvas');
        let ctx=c.getContext("2d");
        ctx.beginPath();
        ctx.arc(120,50,40,0,2*Math.PI);
        ctx.clearRect(0,0,300,150);
        ctx.fillStyle="yellow";
        ctx.fill();
    }
}

let bong1 = new ElectricLamp(true);
let congtac = new SwitchButton(true);
let bong2 = new ElectricLamp();
bong1.turnOn();
// bongden.turnOff();
congtac.connect(bong2);

function switchBtn() {
    if (!congtac.status) {
        congtac.switchOn();
    } else {
        congtac.switchOff();
    }
}

