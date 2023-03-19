let firstNumber;
let secondNumber;

firstNumber =prompt("Enter first number");
secondNumber = prompt("Enter second number");

const additionResult = Number(firstNumber)+Number(secondNumber);
const subtractionResult = Number(firstNumber)-Number(secondNumber);
const multiplicationResult = Number(firstNumber)*Number(secondNumber);
const divisionResult = Number(firstNumber)/Number(secondNumber);

if (firstNumber == '' || secondNumber == '') {
    alert (`Error`)
} else {
    alert (`The result of addition ${additionResult}`);

    if (Number(secondNumber) > Number(firstNumber)) {
        confirm (`Are you sure you want to proceed with the operation?`) ? alert(`The result of subtraction ${subtractionResult}`) : null ;
    } else {
        alert(`The result of subtraction ${subtractionResult}`)
    }
    alert(`The result of multiplication ${multiplicationResult}`);
    if (secondNumber == 0) {
        alert (`Division by zero is impossible`)
            } else {
        alert (`The result of division ${divisionResult}`)
            }
        } 