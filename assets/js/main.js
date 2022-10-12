var step = prompt('Neçə ədəd daxil etmək istəyirsiniz?');
var nums = [];
var check = true;
var result1 = 1;
var result2 = 1;
var result3 = 0;
var result4 = 0;
if(isNaN(step)) {
    alert('Rəqəm daxil edin!')
}
else{
    for (let i = 0; i < step; i++) {
        var num = prompt(`${i+1}-ci ədədi daxil edin`);
        result1 *= parseFloat(num);
        result2 /= parseFloat(num);
        result3 -= parseFloat(num);
        result4 += parseFloat(num);
    }
}
var func = prompt('(* , / , - , +) daxil edin')
if (func == '*') {
    alert(result1.toFixed(2));
}
else if (func == '/') {
    alert(result2.toFixed(2));
}
else if (func == '-') {
    alert(result3.toFixed(2));
}
else if (func == '+') {
    alert(result4.toFixed(2));
}
else{
    alert('Qeyd olunanlardan 1-ni daxil edin');
}