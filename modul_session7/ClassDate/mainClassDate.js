function MyDate(day,month,year) {

    this.day1 = day;
    this.month1 = month;
    this.year1 = year;

        // this.setDay = function (day) {
        //     this.day1 = day;
        // };
        // this.setMonth = function (month) {
        //     this.month1 = month;
        // };
        // this.setYear = function (year) {
        //     this.year1 = year;
        // };


        this.getDay = function () {
            return this.day1;
        };
        this.getMonth = function () {
            return this.month1;
        };
        this.getYear = function () {
            return this.year1;
        };
};
let date = new MyDate(1,2,3);

// date.setDay(10);
 //date.setMonth(10);
// date.setYear(2019);

let day = date.getDay(); // 2

let month = date.getMonth(); // 2

let year = date.getYear();
console.log(day + "/" + month + "/" + year);








