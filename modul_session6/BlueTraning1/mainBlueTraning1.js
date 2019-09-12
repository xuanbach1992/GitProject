function alertMessage() {
    alert("Hello World");
}

function increaseNumber(num) {
    num = parseFloat(num);
    return num + 1;
}

function showIncreaseNumber() {
    let inputNumber = prompt("nhap so tư ban phim");

    document.getElementById('idDemoEx1').innerHTML = increaseNumber(inputNumber);
}

function compare(a, b) {
    let result = "";
    if (a > b) {
        result = alert("so thu 1 lon hon");
    } else {
        result = alert(a + b);
    }
    return result;
}

function showCompareNumber() {
    let num1 = Number(prompt("nhap so thu 1"));
    let num2 = Number(prompt("Nhap so thu 2"));
    return compare(num1, num2);
}

function addNumbers(result) {
    let firstNum = 4;
    let secondNum = 8;
    result = firstNum + secondNum;
    alert(result);
    return result;
}

function addNumberTotal() {
    let num = 0;
    alert(num);
    num = addNumbers(1);
}

function getNameStarInput() {
    stringInput = document.getElementById('idStarInput').value;
    return stringInput;

}

function findStar() {
    let inputNameStar = getNameStarInput();
    let arr_star = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let arr_constellation = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Majo", "Leo"];
    for (let i = 0; i < arr_star.length; i++) {
        if (arr_star[i] === inputNameStar) {
            alert("ngôi sao: " + arr_star[i] + " thuộc chòm sao: " + arr_constellation[i]);
        }
    }
    alert("khong phai ten ngoi sao");
}