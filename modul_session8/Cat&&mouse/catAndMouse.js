let Mouse = function (name, weight, speed) {
    this._name = name;
    this._weight = weight;
    this._speed = speed;
    this.status = true;

    this.scream=function () {
        this.status=true;
        console.log("chit chit");
    };
    this.setName = function (name) {
        this._name = name;
    };
    this.getName = function () {
        return this._name;
    };
    this.set_Weight = function (weight) {
        this._weight = weight;
    };
    this.get_Weight = function () {
        return this._weight;
    };
    this.setSpeed = function (speed) {
        this._speed = speed;
    };
    this.getSpeed = function () {
        return this._speed;
    };
    this.checkStatus = function () {
        if (this.status) {
            return true;
        } else {
            return false;
        }
    }

}