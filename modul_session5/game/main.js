let GameArray;
let PlayArr1, PlayArr2;
let Max = 52;
let scorePlay1;
let scorePlay2;
let print = document.getElementById('hightScore');
function CreatArrayGame() {

    GameArray = [];
    for (let i = 1; i <= Max; i++) {
        GameArray.push(i);
    }
    document.getElementById('CreatArrId').innerHTML = "";
    document.getElementById('CreatArrId').innerHTML = `[${GameArray}]`;
    creatPlayer();
}

function creatPlayer() {
    PlayArr1 = [];
    PlayArr2 = [];
    let randomArrayElement = 0;
    for (let i = 0; i < GameArray.length; i++) {
        randomArrayElement = Math.floor(Math.random() * GameArray.length);
        PlayArr1.push(GameArray[randomArrayElement]);
        GameArray.splice(randomArrayElement, 1);
    }
    PlayArr2 = GameArray;
    document.getElementById('IdPlayer1').innerHTML += "";
    document.getElementById('IdPlayer1').innerHTML = `Player1 :[${PlayArr1}]`;

    document.getElementById('IdPlayer2').innerHTML += "";
    document.getElementById('IdPlayer2').innerHTML = `Player2 :[${PlayArr2}]`;
}

function winGame() {
    print.innerHTML = "";
    scorePlay1 = scorePlay2 = 0;
    for (let i = 0; i < PlayArr1.length; i++) {
        if (PlayArr1[i] > PlayArr2[i]) {
            scorePlay1++;
        } else {
            scorePlay2++;
        }
    }
    resuilt();
}

function resuilt() {

    if (scorePlay1 > scorePlay2) {
        print.innerHTML = "Player 1 voi so diem " + scorePlay1;
    } else if (scorePlay1 === scorePlay2) {
        print.innerHTML = "Hue ca lang";
    } else {
        print.innerHTML = "Player 2 voi so diem " + scorePlay2;
    }

}
