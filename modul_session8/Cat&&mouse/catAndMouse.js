let Mouse = function (name, weight, speed) {
    this._name = name;
    this._weight = weight;
    this._speed = speed;
    this.status = true;

    this.scream=function () {
        console.log("chit chit");
    };
    this.setName = function (name) {
        this._name = name;
    };
    this.getName = function () {
        return this._name;
    };
    this.setWeight = function (weight) {
        this._weight = weight;
    };
    this.getWeight = function () {
        return this._weight;
    };
    this.setSpeed = function (speed) {
        this._speed = speed;
    };
    this.getSpeed = function () {
        return this._speed;
    };
    this.checkStatus = function () {
        if (!this.status) {
            console.log("chet roi");
            return false;
        } else {
            console.log("song so so ra day");
            return true;
        }
    }
};
let Cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;

    this.scream = function () {
        console.log("ngaoi ngao");
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.set_Weight = function (weight) {
        this.weight = weight;
    };
    this.get_Weight = function () {
        return this.weight;
    };
    this.setSpeed = function (speed) {
        this.speed = speed;
    };
    this.getSpeed = function () {
        return this.speed;
    };
    this.eatMouse = function(rat) {
        this.weight = this.weight + rat._weight;
    };
    this.huntingMouse = (rat) => {
        if (this.speed > rat._speed) {
            console.log("bat dc chuot");
        }
    };
};

let chuot = new Mouse("Jerry", 2, 4);
let meo = new Cat("tom", 12, 6);
meo.huntingMouse(chuot);
meo.eatMouse(chuot);
console.log(meo.weight);