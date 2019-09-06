let primeNumber = prompt('nhập số các nguyên tố muốn hiển thị, số lượng', '');
let dem = 0;

function checkPrimer(val) {
    if (val == 2) {
        return true;
    } else if (val < 2) {
        return false;
    } else if (val % 2 == 0) {
        return false;
    } else {
        for (let i = 3; i <= Math.sqrt(val); i = i + 2) {
            if (val % i == 0) {
                return false;
                break;
            }
        }
    }
    return true;
}

let NumberCount = 2;
while (dem < primeNumber) {
    if (checkPrimer(NumberCount)) {
        dem++;
        document.write(NumberCount + " ");
    }
    NumberCount++;
}
