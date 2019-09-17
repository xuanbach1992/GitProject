let display="";
let Mobile = function (name) {
    this.name = name;
    this.batery = 100;
    this.inbox = [];
    this.outbox = [];
    this.msg = "";

    this.writeMsg = function (value) {
        this.msg = value;
    };
    this.sendMsg = function (mobile) {
        this.outbox.push(this.msg);
        mobile.reveiceMsg(this.msg, this.name);
    };

    this.reveiceMsg = function (msg, name) {
        this.inbox.push(msg);
    };
};
let iphone = new Mobile('IP');
let nokia = new Mobile('nokia');

function sendMsg(mobile1, mobile2) {
    mobile1.sendMsg(mobile2);
    display();
    // showBtn();
    mobile1.batery--;
}

function display() {
    // document.getElementById("inboxNokia").innerHTML = "";
    // document.getElementById("inboxNokia").innerHTML += `${nokia.inbox} </br>`;

    document.getElementById('batteryNokia').innerHTML = `Battery:  ${nokia.batery}`;

    // document.getElementById("sentNokia").innerHTML = "";
    // document.getElementById("sentNokia").innerHTML += `${nokia.outbox} </br>`;

    document.getElementById("inputNokia").value = "";

    // document.getElementById("inboxIphone").innerHTML = "";
    // document.getElementById("inboxIphone").innerHTML += `${iphone.inbox} </br>`;

    // document.getElementById("sentIphone").innerHTML = "";
    // document.getElementById("sentIphone").innerHTML += `${iphone.outbox} </br>`;

    document.getElementById('batteryIphone').innerHTML = `Battery:  ${iphone.batery}`;

    document.getElementById("inputIphone").value = "";
}

function showBtn(nameBtn) {
    switch (nameBtn) {
        case "inboxPhone1":
            document.getElementById("inboxNokia").innerHTML = "";
            document.getElementById("inboxNokia").innerHTML = nokia.inbox+"</br>";
            break;
        case "sentPhone1":
            document.getElementById("sentNokia").innerHTML = "";
            document.getElementById("sentNokia").innerHTML += `${nokia.outbox} </br>`;
            break;
        case "inboxPhone2":
            document.getElementById("inboxIphone").innerHTML = "";
            document.getElementById("inboxIphone").innerHTML += `${iphone.inbox} </br>`;
            break;
        case "sentPhone2":
            document.getElementById("sentIphone").innerHTML = "";
            document.getElementById("sentIphone").innerHTML += `${iphone.outbox} </br>`;
            break;
    }
}

// function showBtn(nameBtn) {
//     switch (nameBtn) {
//         case "inboxPhone1":
//             document.getElementById("inboxNokia").innerHTML = "";
//             document.getElementById("inboxNokia").innerHTML = nokia.inbox+"</br>";
//             break;
//         case "sentPhone1":
//             document.getElementById("sentNokia").innerHTML = "";
//             document.getElementById("sentNokia").innerHTML += `${nokia.outbox} </br>`;
//             break;
//         case "inboxPhone2":
//             document.getElementById("inboxIphone").innerHTML = "";
//             document.getElementById("inboxIphone").innerHTML += `${iphone.inbox} </br>`;
//             break;
//         case "sentPhone2":
//             document.getElementById("sentIphone").innerHTML = "";
//             document.getElementById("sentIphone").innerHTML += `${iphone.outbox} </br>`;
//             break;
//     }
// }
//
// function printMsg(arr) {
//     for (let i = 0; i <arr.length; i++) {
//         display += `${i + 1}||${arr[i]} <br/>`;
//     }
// }