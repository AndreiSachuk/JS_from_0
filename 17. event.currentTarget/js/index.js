// var buttonPlus = document.getElementById("buttonPlus");
// var buttonMinus = document.getElementById("buttonMinus");
// var buttonMult = document.getElementById("buttonMult");
// var buttonDevide = document.getElementById("buttonDevide");

var arrayOfButtons = document.getElementsByClassName('operation-button')
//var arrayOfButtons = [buttonPlus, buttonMinus, buttonMult, buttonDevide];

var input1 = document.getElementById("value1");
var input2 = document.getElementById("value2");

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if (operationCode === "+") {
        var result = number2 + number1;
    } else if (operationCode === "-") {
        var result = number2 - number1;
    } else if (operationCode === "*") {
        var result = number2 * number1;
    } else if (operationCode === "/") {
        var result = number2 / number1;
    } else {
        window.alert('operation is unknown');
    }
    window.alert(result);

}

function onOperationButtonClick(eventObject) {
    var clicketElement = eventObject.currentTarget;
    var operation = clicketElement.innerHTML;
    makeOperation(operation);
}


for (var i=0; i<arrayOfButtons.length; i++){
    arrayOfButtons[i].addEventListener('click', onOperationButtonClick);
}
