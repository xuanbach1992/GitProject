let arrayProduct = [];
let inputElement = document.getElementById('id_input');
let index = 0;

function addProduct() {
    let product = inputElement.value;
    arrayProduct.push(product);
    inputElement.value = "";
    inputElement.focus();
    displayProduct();
}
function displayProduct() {
    let display = "<hr/>";
    index++;
    for (let i = 0; i < arrayProduct.length; i++) {
        display += `${i + 1}||${arrayProduct[i]} <hr/>`;
    }
    document.getElementById("idDisplayProduct").innerHTML = display;
}
