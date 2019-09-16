const
let Mobile = function (name) {//khai bao lop Mobile

    this.name = name;
    this.battery = 100;
    this.inbox = [];
    this.sent = [];
    this.msg = "";

    this.writeMsg = function (value) {
        this.msg = value;
    };
    this.sendMsg = function (mobile) {
        this.sent.push(this.msg);
        mobile.reveiceMsg(this.msg, this.name);
    }
    ;
    this.reveiceMsg = function (msg, name) {
        this.inbox.push(msg);
        console.log("da nhan tin nhan"+this.inbox+" tu "+name);
    };
};
let nokia = new Mobile("Nokia");//khoi tao lop mobile
let iphone = new Mobile("IP");

nokia.writeMsg("hello mes");
nokia.sendMsg(iphone);


