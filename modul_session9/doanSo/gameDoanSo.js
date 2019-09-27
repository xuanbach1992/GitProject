let arr = [];
let indexPrint = document.getElementById("printIndex");
let num = 0;
let randomNum = 0;
let count = 0;

function creatArrat() {
    arr = [];
    randomNum = Math.round(Math.random() * 50);
    for (let i = 0; i < 50; i++) {
        arr.push(i);
    }
    printArray();
}

function printArray() {
    indexPrint.innerHTML = randomNum + "</br>";
    indexPrint.innerHTML += `[${arr}]`
}

function inputNum() {
    num = prompt("Nhap so muon doan trong khoang tu 0-100");
}

function gamePlay() {
    if (count < 5) {
        setInterval(checkRandomNumber, 100);
    } else {
        clearInterval(checkRandomNumber);
        alert("ban da het luot doan");
    }
}

function checkRandomNumber() {
    inputNum();
    if (num === randomNum) {
        alert("ban da doan dung");
    } else if (num < randomNum) {
        alert("nho hon roi, doan lai di");
    } else {
        alert("lon hon roi, doan lai di");
    }
        count++;
}