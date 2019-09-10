let Arr = [];
let MaxArray;

function CreatArrayRd() {
    Arr = [];
    for (let i = 0; i < 10; i++) {
        Arr[i] = Math.ceil(Math.random() * 100);
    }
    document.getElementById('demo').innerHTML = "";
    document.getElementById('demo').innerHTML += `[${Arr}]`;
}

function NumberArrayLargeForTen() {
    let CountNum = 0;
    // let a=0;
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] > 10) {
            CountNum++;
            // a=i;
        }
    }
    document.getElementById('demo1').innerHTML = `Số phần tử lớn hơn 10 là : ${CountNum}`;
}

function NumberMaxInArray() {
    MaxArray = Arr[0];
    for (let i = 0; i < Arr.length; i++) {
        if (MaxArray < Arr[i]) {
            MaxArray = Arr[i];
        }
    }
    document.getElementById('demo2').innerHTML = `phan tu lon nhat la ${MaxArray}`;
}

function NumberMedium() {
    let sum = 0;
    let arrMedium = 0;
    for (let i = 0; i < Arr.length; i++) {
        sum += Arr[i];
    }
    arrMedium = sum / Arr.length;
    document.getElementById('demo3').innerHTML = `gia tri trung binh cua mang  ${arrMedium}`;
}

function SwapElement() {
// let tepm;
    for (let first =0,last = Arr.length-1; first < Arr.length/2; first++,last--) {
            let tepm = Arr[first];
           Arr[first] = Arr[last];
           Arr[last]=tepm;
    }
    document.getElementById('demo4').innerHTML = `[${Arr}]`;
}