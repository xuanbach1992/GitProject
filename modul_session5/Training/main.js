function DemoArray2D() {
    let array2D = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    for (let i = 0; i < array2D.length; i++) {
        document.getElementById('demoArrayId').innerHTML += "<br> Hang " + i+ ":";
        for (let j = 0; j < array2D[i].length; j++) {
            document.getElementById('demoArrayId').innerHTML += " " + array2D[i][j]+" ";
        }
    }
}