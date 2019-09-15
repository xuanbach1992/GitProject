let Rectangle=function(width, height) {

    this.width = width;
    this.height = height;
    this.getArea = function () {
      return   this.width* this.height;
    };
};
let square = new Rectangle(5,6);
alert(square.getArea());