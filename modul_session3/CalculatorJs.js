let InputNumber = document.getElementById('input_num');
let Number1, Number2;
let operator;

function ClickButton(val) {
    InputNumber.value = InputNumber.value + val;
}

function ClickButtonOperator(val) {
    Number1 = Number(InputNumber.value);
    document.getElementById('input_num').value = "";
    operator = val;
}

function Result() {
    Number2 = Number(InputNumber.value);
    switch (operator) {
        case "+":
            document.getElementById('input_num').value = Number1 + Number2;
            break;
        case "-":
            document.getElementById('input_num').value = Number1 - Number2;
            break;
        case "*":
            document.getElementById('input_num').value = Number1 * Number2;
            break;
        case "/":
            document.getElementById('input_num').value = Number1 / Number2;
            break;
    }
}