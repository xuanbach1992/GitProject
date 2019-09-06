let primeNumber = prompt('nhập số các nguyên tố muốn hiển thị, số lượng', '');
let count1;
let N = 2;
for (count1 = 1; count1 <= primeNumber; count1++) {
    let Numberlet = count1;
    let songuyento = true;
    if (Numberlet % 2 == 0) {
        songuyento = false;
    } else {
        for (let i = 3; i <= Math.sqrt(Numberlet); i = i + 2) {
            if (Numberlet % i == 0) {
                songuyento = false;
                break;
            }
            // console.log(i);
        }
    }
    if (songuyento) {
        N = N + primeNumber;
    }
}
alert(N);
// }