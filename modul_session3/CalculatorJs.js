let list = document.getElementsByClassName('btn');
let x = document.getElementById('num_input1');
let cont = document.getElementsByClassName('btnEqual');
let list_toantu= document.getElementsByClassName("toanTu");
// console.log(resuil);
for (let i = 0; i < list.length; i++) {
    // let att = document.createAttribute('onclick');
    // att.value = "setInput(this.value)";
    // list[i].setAttributeNode(att);
    list[i].setAttribute("onclick", "setInput(this.value)");//dung 1 lenhj nay or 3 lenh kia
}
for(let i=0;i<list_toantu.length;i++){
    list_toantu[i].setAttribute("onclick","toantu(this.value)");
}
function setInput(a) {
    let y = x.value;
    document.getElementById('num_input1').value = y + a;
}
function toantu(pheptoan){
    switch (pheptoan) {
        case +:
    }
}

cont[0].onclick = function () {
    let z = x.value;
    document.getElementById('num_input1').value = eval(z);
    // document.getElementById('num_input1').value=y;
};


