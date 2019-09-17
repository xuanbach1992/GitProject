let Apple = function (weight) {
    this._weight = weight;

    this.setWeight = function (val) {
        this._weight = val;
    };
    this.getWeight = function () {
        return this._weight;
    };

    this.getEmpty = function () {
        if (this._weight > 0) {
            return true;
        } else {
            return false;
        }
    };
    this.getDecrease = function () {
        if (this.getEmpty) {
            this._weight--;
        } else {
            console.log("het tao roi gam cay ko?");
        }
    };
};

let Human = function (name, gender, weight) {
    this.name = name;
    this.weight = weight;
    this.gender = gender;

    this.setName = function () {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.setWeight = function () {
        this.weight = weight;
    };
    this.getWeight = function (weight) {
        return this.weight;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.eatApple = (tao) => {
        if (this.getEmpty) {
            this.weight++;
            tao.getDecrease();
        }
    };
}
let tao = new Apple(10);
let human = new Human("Bach", "nam", 60);
human.eatApple(tao);
console.log(human.getWeight());
console.log(tao.getWeight());
