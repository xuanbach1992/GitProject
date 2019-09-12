let Arr = [];
let MaxArray;

function CreatArrayRd() {
    Arr = [];
    for (let i = 0; i < 10; i++) {
        Arr[i] = Math.ceil(Math.random() * 100 - 40);
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
    for (let first =0,last = Arr.length-1; first < Arr.length/2; first++,last--) {
            let tepm = Arr[first];
           Arr[first] = Arr[last];
           Arr[last]=tepm;
    }
    document.getElementById('demo4').innerHTML = `[${Arr}]`;
}

function NumberNegative() {
    let CountNumberNegative = 0;
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] < 0) {
            CountNumberNegative++;
        }
    }
    document.getElementById('demo5').innerHTML = `so phan tu nguyen am la ${CountNumberNegative}`;
}

function NumberCheck() {
    let checkNumber = Number(prompt('Nhap so muon check'));
    for (let i = 0; i < Arr.length; i++) {
        if (checkNumber === Arr[i]) {
            document.getElementById('demo6').innerHTML = `${checkNumber}  co trong mang`;
            break;
        } else {
            document.getElementById('demo6').innerHTML = `${checkNumber} KHONG co trong mang`;
        }
    }
}

function CheckAndDel() {
    let checkNumDel = Number(prompt('Nhap so muon xoa'));
    // if (Arr.includes(checkNumDel)) {
        for (let i = 0; i < Arr.length-1; i++) {
            if (checkNumDel === Arr[i]) {
                let ValueTepm = Arr[i];
                Arr[i] = Arr[i + 1];
                Arr[i + 1] = ValueTepm;
            }
        }
    // }
    Arr.pop();
    document.getElementById('demo7').innerHTML = `mang moi la: ${Arr}`;
}
function SortNumber() {
    Arr.sort(function (a,b) {
        return a-b;
    });
    document.getElementById('demo8').innerHTML = `mang moi sap xep: ${Arr}`;
}
function ArrayPlusArray() {
    document.getElementById("demo9").innerHTML=`mang 1 la[${Arr}]`+"<br>";
    let Array2=[];
    for (let i=0;i<10;i++){
        let numberInputArray2=+(prompt('Nhap phan tu vap mang moi'));
        Array2.push(numberInputArray2);
    }
     document.getElementById("demo9").innerHTML+=` mang  2 la :[${Arr}]`;
    let Array3=Arr.concat(Array2);
    document.getElementById("demo9").innerHTML+=` mang  moi tao tu 2 mang cu  la :[${Array3}]`;
}
