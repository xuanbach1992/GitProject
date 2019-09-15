let Temperature = function (celsius) {
    this.celsius = celsius;
    this.setCelsius = function (celsius) {
        this.celsius = celsius;
    };
    this.getCelsius = function () {
        return this.celsius;
    };
    this.getConvertToKenvinTemp = function () {
        return this.celsius + 273.15;
    };
    this.getConvertToTepmF = function () {
        return this.celsius * 1.8 + 32;
    };
    this.printTempeKenvin = function () {
        alert(`${this.getCelsius()} độ C = ${this.getConvertToKenvinTemp()} độ K`);
    };
    this.printTempeF = function () {
        alert(`${this.getCelsius()} độ C = ${this.getConvertToTepmF()} độ F`);
    };
};
let tepm = new Temperature();
tepm.setCelsius(25);
tepm.printTempeKenvin();
tepm.printTempeF();