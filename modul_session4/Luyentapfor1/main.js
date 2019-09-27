function Exam1() {
    for (let i = 99; i > 0; i--) {
        if (i == 99) {
            alert("da hoan thanh");
        } else {
            alert("chua hoan thanh");
            break;
        }
    }
}

function Exam2() {
    let inputTemplate = +prompt('Nhap nhiet do');
    while (inputTemplate > 100) {
        alert("giam nhiet do xuong");
        break;
    }
    while (inputTemplate < 0) {
        alert("tang nhiet len");
        break;
    }
}

function fibonacci(value) {
    let numbers_1 = 1;
    let numbers_2 = 0;
    let numbers = 1;//0 or 1 tuy thuoc day bat dau tu dau
    for (let i = 0; i < value; i++) {
        numbers = numbers_1 + numbers_2;
        numbers_2 = numbers_1;
        numbers_1 = numbers;
    }
    return numbers;
}

function Exam3() {
    for (let i = 0; i < 20; i++) {
        document.write(fibonacci(i) + " ");
    }

}

function Exam4() {
    for (let i = 0; i < 20; i++) {
        if (Fibonacci(i) % 5 == 0) {
            document.write(Fibonacci(i) + " ");
            break;
        }
    }
}

function Exam5() {
    let total = 0;
    for (let i = 0; i < 20; i++) {
        total += Fibonacci(i);
    }
    document.write(total);
}

function Exam6() {
    let Count1 = 0;
    let GetDataNumber = 1;
    let total = 0;
    while (Count1 < 30) {
        if (GetDataNumber % 7 == 0) {
            total += GetDataNumber;
            Count1++;
        }
        GetDataNumber++
    }
    document.write(total);
}

function Exam7() {
    let NumberSwapi;
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            NumberSwapi = "FizzBuzz";
        } else if (i % 3 == 0) {
            NumberSwapi = "Fizz";
        } else if (i % 5 == 0) {
            NumberSwapi = "Buzz";
        } else {
            NumberSwapi = i;
        }
        document.write(NumberSwapi + " || ");
    }
}

function Exam8() {
    let InputFloor = +prompt("Nhập số muốn đoán từ", "");
    let InputCeil = +prompt("Nhập số muốn đoán đến", "");
    let InputNumber;
    let NumberRandom = Math.round(Math.random() * (InputCeil - InputFloor) + InputFloor);
    for (let i = 0; i < 3; i++) {
        InputNumber = +prompt("Nhập số muốn đoán", "");
        if (InputNumber < NumberRandom) {
            alert("Số bạn chọn NHỎ hơn số may mắn");
        } else if (InputNumber > NumberRandom) {
            alert("Số bạn chọn Lớn hơn số may mắn");
        }else {
            alert("Congratulations Win");
            break
        }
    }
}
function Exam9() {
    let n = 5;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    document.write("<br>");

    for (let i = 0; i < n; i++) {
        for (let j = n; j > i; j--) {
            document.write("* ");
        }
        document.write("<br>");
    }
    document.write("<br>");


    for (let i = 0; i < n; i++) {
        for (let j = n; j > i; j--) {
            document.write("*git ");
            for (let k = j-i; k <= 1; k++) {
                document.write("a");
            }
        }
        document.write("<br>")

    }
}