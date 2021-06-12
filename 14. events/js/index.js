function addErrorClass(elementID) {
    var element = document.getElementById(elementID);
    element.className = 'error-input';
}

function addErrorClassToAllInputs() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');

}

// addErrorClass('first-name');

//window.setTimeout(addErrorClassToAllInputs, 2000);


var sendButton = document.getElementById("send-button");
sendButton.addEventListener('click', addErrorClassToAllInputs);