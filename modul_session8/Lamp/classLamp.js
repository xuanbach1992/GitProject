let Battery = function () {

    this.setEnergy = function (energy) {
        this._energy = energy;
    };

    this.getEnergy = function () {
        return this._energy;
    };

    this.decreaseEnergy = function () {
        if (this._energy > 0) {
            this._energy--;
        }
    };
};

let FlashLamp = function () {
    this.setBattery = function (battery) {
        this._battery = battery;
    };
    this.getBatteryInfo = function () {
        return this._battery.getEnergy()
    };
    this.light = function () {
        if (this._status) {
            console.log('Den sang');
        } else {
            console.log("tat den")
        }
    };
    this.turnOn = function () {
        this._status = true;
    };
    this.turnOff = function () {
        this._status = false;
    };
};
let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

console.log("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

console.log("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
console.log("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

console.log("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();
