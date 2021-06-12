var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMult = document.getElementById("buttonMult");
var buttonDevide = document.getElementById("buttonDevide");
var input1 = document.getElementById("value1");
var input2 = document.getElementById("value2");

function getValues() {
    number1 = Number(input1.value);
    number2 = Number(input2.value);
}


function onButtonPlusClick() {
    getValues();
    var result = number2 + number1;
    window.alert(result);
}

function onButtonMinusClick() {
    getValues();
    var result = number1 - number2;
    window.alert(result);
}

function onButtonMultClick() {
    getValues();
    var result = number1 * number2;
    window.alert(result);
}

function onButtonDevideClick() {
    getValues();
    var result = number1 / number2;
    window.alert(result);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMult.addEventListener('click', onButtonMultClick);
buttonDevide.addEventListener('click', onButtonDevideClick);