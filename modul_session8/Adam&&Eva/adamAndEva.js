let Apple = function (weight) {
    this._weight = weight;

    this.setWeight = function (val) {
        this._weight = val;
    };
    this.getWeight = function () {
        return this._weight;
    };
    this.decrease = function () {
        if (this._weight > 0) {
            this._weight--;
        } else {
            console.log("hết táo rồi còn vỏ ăn không ?");
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
    this.eatApple =function (tao){
        if (tao._weight > 0) {
            this.weight++;
            tao.decrease();
        } else {
            tao.decrease();
        }
    };
};
let tao = new Apple(0);
let human = new Human("Bach", "nam", 60);
human.eatApple(tao);
console.log(human.getWeight());
console.log(tao.getWeight());
