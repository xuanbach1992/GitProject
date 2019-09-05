let canvas1 = document.getElementById('canvas1');
let colsDraw;
let rowsDraw;
let rowsCount, colsCount;
let fill = document.getElementById('fill')

function Draw() {
    colsDraw = document.getElementById('cols').value;
    rowsDraw = document.getElementById('rows').value;
    for (rowsCount = 1; rowsCount <= rowsDraw; rowsCount++) {
        canvas1.innerHTML += "<br>";
        for (colsCount = 1; colsCount <= colsDraw; colsCount++) {
            if (!fill.checked) {
                if (rowsCount == 1 || rowsCount == rowsDraw || colsCount == 1 || colsCount == colsDraw) {
                    canvas1.innerHTML += "*";
                } else {
                    canvas1.innerHTML += " "
                }
            }
            else {
                canvas1.innerHTML += "*";
            }
        }
    }
}