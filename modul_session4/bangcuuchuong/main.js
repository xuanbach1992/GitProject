let bang;
let i,j;
function bangcuuchuongfor() {

    bang = "<table border='1' width='300' cellspacing='10' cellpadding='10'>"
    for (let i = 1; i < 10; i++) {
        bang = bang + "<tr>";
        for (let j = 1; j < 10; j++) {
            bang = bang + "<td>"+j+"*"+i+"="+ i * j + "</td>";
        }
        bang = bang + "</tr>";
    }
    bang = bang + "</table>";
    document.getElementById('demo').innerHTML+=bang;
}
function bangcuuchuongwhile() {
    bang = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
    i = j = 1;
    while (i <= 10) {
        bang = bang + "<tr>";
        while (j <= 10) {
            bang = bang + "<td>"+j+"*"+i+"="+ i * j + "</td>";
            j++;
        }
        bang = bang + "</tr>";
        j = 1;
        i++;
    }
    bang = bang + "</table>";
    document.getElementById('demo').innerHTML+=bang;
}