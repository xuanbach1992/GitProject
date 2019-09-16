const messMyPhone = document.getElementById('message_my_phone');
const messYourPhone = document.getElementById('message_your_phone');
const ShowMessageMyPhone = document.getElementById('messageMyPhone');
const ShowMageYourPhone = document.getElementById('messageYourPhone');
const batteryMyPhone = document.getElementById('idBatteryMyPhone');
const batteryYourPhone = document.getElementById('idBatteryYourPhone');

let Telephone = function (battery, inbox, sentInbox, dralt) {
    this.battery=battery;
    this.inbox = inbox;
    this.sent = sentInbox;
    this.dralt = dralt;

    this.getBattery = function () {
        return this.battery = battery;
    };
    this.getMessMyPhone = function () {
        return messMyPhone.value;
    };
    this.getMessYourPhone = function () {
        return messYourPhone.value;
    };
    this.getMessToMyPhone = function () {
        return this.getMessMyPhone();
    };
    this.getMessToYourPhone = function () {
        return this.getMessYourPhone();
    };
    // this.sendMessYourPhone = function () {
    //     messYourPhone.value = this.getMessToMyPhone();
    // };
    // this.sendMessMyPhone = function () {
    //     messMyPhone.value = this.getMessToYourPhone()
    // };
    this.showMyBattery = function () {
        batteryMyPhone.innerText = this.battery;
    };
    this.showYourBattery = function () {
        batteryYourPhone.innerText = this.battery;
    };
    this.getInbox = function () {
        return this.inbox;
    };
    this.getSent = function () {
        return this.sent;
    };
    this.getDralt = function () {
        return this.dralt;
    };
};
let nokia = new Telephone(50, [], [], []);
let iphone = new Telephone(100, [], [], []);

let nokiaBattery = nokia.getBattery();
let nokiaInbox = nokia.getInbox();
let nokiaSent = nokia.getSent();
let nokiaDralt = nokia.getDralt();
nokia.showMyBattery();

let iphoneInbox = iphone.getInbox();
let iphoneSent = iphone.getSent();
let iphoneDralt = iphone.getDralt();
let iphoneBattery = iphone.getBattery();
iphone.showYourBattery();


function sendMessage(id) {
    switch (id) {
        case"myPhone":
            iphoneInbox.push(nokia.getMessToMyPhone());
            nokiaSent.push(nokia.getMessToMyPhone());
            messMyPhone.value = "";
            messMyPhone.focus();
            nokiaBattery--;
            nokia.showMyBattery()
            break;
        case"yourPhone":
            nokiaInbox.push(iphone.getMessToYourPhone());
            iphoneSent.push(iphone.getMessToYourPhone());
            messYourPhone.value = "";
            messYourPhone.focus();
            iphoneBattery--;
            iphone.showYourBattery();
            break;
    }
}

function showMess(id) {
    switch (id) {
        case "myPhoneInbox":
            ShowMessageMyPhone.innerText = "";
            for (let i = 0; i < nokiaInbox.length; i++) {
                ShowMessageMyPhone.innerText += `${i + 1} : ${nokiaInbox[i]}<br>`;
            }
            ;
            break;
        case "myPhoneSent":
            ShowMessageMyPhone.innerText = "";
            for (let i = 0; i < nokiaSent.length; i++) {
                ShowMessageMyPhone.innerHTML += `${i + 1} : ${nokiaSent[i]}<br>`
            }
            ;
            break;
        case "myPhoneDralt":
            ShowMessageMyPhone.innerHTML = nokiaDralt[nokiaDralt.length - 1];
            break;
        case "yourPhoneInbox":
            ShowMageYourPhone.innerHTML = "";
            for (let i = 0; i < iphoneInbox.length; i++) {
                ShowMageYourPhone.innerHTML += `${i + 1} : ${iphoneInbox[i]} <br>`
            }
            ;
            break;
        case "yourPhoneSent":
            ShowMageYourPhone.innerHTML = "";
            for (let i = 0; i < iphoneSent.length; i++) {
                ShowMageYourPhone.innerHTML += `${i + 1} : ${iphoneSent[i]}<br>`
            }
            ;
            break;
        case "yourPhoneDralt":
            ShowMessageMyPhone.innerHTML = iphoneDralt[iphoneDralt.length - 1];
            break;
    }
}

function addToDralt(id) {
    switch (id) {
        case"message_my_phone":
            nokiaDralt.push(nokia.getMessToMyPhone());
            break;
        case"message_your_phone":
            iphoneDralt.push(iphone.getMessToYourPhone());
            break;
    }
}






