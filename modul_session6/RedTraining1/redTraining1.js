let arrayProduct = [];

function inputProduct() {
    product = document.getElementById('id_input').value;
    return product;
}

function addProduct() {
    arrayProduct.push(inputProduct());
}

function displayProduct() {
    document.getElementById('idDisplayProduct').innerText=arrayProduct;
}
