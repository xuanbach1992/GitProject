let arr = [];
let countChar;

function squareNumber(num) {
    return num * num;
}

function showSquareNumber() {
    let inputNum = Number(prompt("nhap so"));
    alert("binh phuong so do la :" + squareNumber(inputNum));
}

function borderCircle(x) {
    let result = 2 * x * Math.PI;
    document.getElementById("idResult").value = result;
}

function areaCircle(x) {
    let result = x * x * Math.PI;
    document.getElementById("idResult").value = result;
}

function factorialNumber(x) {//dung for
    let factor = 1;
    for (let i = 1; i <= x; i++) {
        factor = factor * i;
    }
    document.getElementById('idNumberOutput').value = factor;
}

function factorialNum(x) {
// đệ quy
    if (x <= 1) {
        return 1;
    } else {
        return (x * factorialNum(x - 1));
    }
}

function isNum(val) {
    if (0 <= val && val <= 9) {
        document.getElementById('idDisplay').innerText = " la so";
    } else {
        document.getElementById('idDisplay').innerText = " KHONG la so!";
    }
}

function deleteValue() {
    // document.getElementById('idDisplay').innerText ="";
    document.getElementById('idIsNum').value = "";
    document.getElementById('idIsNum').focus();
}

function findMinNumberInput() {
    let number1 = +prompt('nhap so 1');
    let number2 = +prompt('nhap so 2');
    let number3 = +prompt('nhap so 3');
    let min = minNumber(number1, number2, number3);
    alert(min);
}

function minNumber(x, y, z) {
    let arr = [];
    arr.push(x, y, z);
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

function swapNum(a, b) {
    let tepm = a;
    a = b;
    b = tepm;
    alert("so thu 1 moi la " + a);
    alert("so thu 2 moi la " + b);
}

function inputNumberToSwap() {
    let number1 = +prompt('nhap so 1');
    let number2 = +prompt('nhap so 2');
    return swapNum(number1, number2);
}

function addStringIntoArrayAndSwap() {
    let str = document.getElementById('idArrayInput').value;
    arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    arr.reverse();
}

function displayNewArray() {
    document.getElementById('id_display_array').innerHTML = arr;
}

function getChar() {
    let num = window.prompt("nhap ki tu muon tra");
    return num;
}

function characterOfAppearances() {
    countChar = 0;
    let char = getChar();
    if (arr.length == 0) {
        countChar = -1;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (char === arr[i]) countChar++;
        }
    }
}

function printIntoIndex() {
    document.getElementById('id_display_number_char').innerHTML = countChar;
}