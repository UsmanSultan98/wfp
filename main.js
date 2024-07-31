function add(){
    var a = document.getElementById('firstNumber').value;
   var b = document.getElementById('secondNumber').value;
    a = parseInt(a);
    b = parseInt(b);
    var addition = a + b;
    document.getElementById('result').innerHTML = addition;
}
