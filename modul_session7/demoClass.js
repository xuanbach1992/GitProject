function Person(first, last, age, gender, interests) {
    this.name1 = {
        first1 : first,
        last1 : last
    };
    this.age1 = age;
    this.gender1 = gender;
    this.interests1 = interests;
    this.bio = function() {
        console.log(this.name1.first1 + ' ' + this.name1.last1 + ' is ' + this.age1 + ' years old. He likes ' + this.interests1);
    };
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name1.first1 + '.');
    };
}
let nguoi =new Person("bach","an",27,"nam",["game","balal","sadsa"]);
nguoi.bio();
nguoi.greeting();