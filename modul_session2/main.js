function tinhtb() {
    let hoa=+document.getElementById('hoa').value;
    let toan=+document.getElementById('toan').value;
    let ly=+document.getElementById('ly').value;
    document.getElementById('diem').innerHTML="Diem trung binh la : " +(toan+ly+hoa)/3;

}
function nhaplai() {
    document.getElementById('hoa').focus();
}
function nhietdo() {
    let c=+document.getElementById('nhietC').value;
    document.getElementById('nhietF').value= (c/5*9)+32;
}

   let a=document.getElementById('bankinh');
let x= Math.PI;
function chuvi() {
    let c=Number(a.value);
    let ketqua=2*x*c;
    document.getElementById('ketqua').value=ketqua;
}
function dientich() {
    let c=Number(a.value);
    ketqua = x*c*c;
    document.getElementById('ketqua').value=ketqua;
}

