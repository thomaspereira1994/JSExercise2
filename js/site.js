//Controller Function
function controllerFunction() {
    //getUserInput();
    let userInput = document.getElementById("userInput").value;

    let reversedString = reverseString(userInput);

    displayResult(reversedString);
}

//Function to reverse string
function reverseString(userInput) {
    let revString = [];

    for (let index = userInput.length - 1; index >= 0; index--) {
        revString += userInput[index];
    }
    return revString;
}

//Function to display result
function displayResult(reversedString) {
    document.getElementById("resultDisplayArea").value = reversedString;
}