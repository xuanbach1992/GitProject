function FunctionJoinArray() {
    let ArrayJoin = ["1", "2", "3", "4"];
    document.getElementById('IdArrayJoin1').innerHTML = ArrayJoin.join() + typeof (ArrayJoin.join()) + "<br>";
    document.getElementById('IdArrayJoin2').innerHTML = ArrayJoin.toString(":") + typeof (ArrayJoin.join()) + "<br>";
    document.getElementById('IdArrayJoin3').innerHTML = ArrayJoin.join("+") + typeof (ArrayJoin.join());
}

function FunctionPushArray() {
    let num = 1321453632354;
    let str = num.toString();
    let ArrayPush = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 == 0) {
            ArrayPush.push("-" + str[i]);
        } else {
            ArrayPush.push(str[i]);
        }
    }
    document.getElementById('IdDemoPush').innerHTML = ArrayPush.join("");
}

function UpAndLowCharater() {
    let str=prompt('nhap chuoi ki tu');
    let Upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let Lower="abcdefghijklmnopqrstuvwxyz";
    let result=[];
    for (let i=0;i<str.length;i++){
        if (Upper.indexOf(str[i])===-1){
            result.push(str[i].toUpperCase());
        }
        else if (Lower.indexOf(str[i])===-1){
            result.push(str[i].toLowerCase());
        }else {
            result.push(str[i]);
        }
    }
    document.getElementById('IdDemoUpAndLow').innerHTML=result.join("");
}