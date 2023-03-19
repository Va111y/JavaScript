let firstNumber;
let secondNumber;

firstNumber =prompt("Enter first number");
secondNumber = prompt("Enter second number");

const additionResult = Number(firstNumber)+Number(secondNumber);
const subtractionResult = Number(firstNumber)-Number(secondNumber);
const multiplicationResult = Number(firstNumber)*Number(secondNumber);
const divisionResult = Number(firstNumber)/Number(secondNumber);


alert(`The result of addition ${additionResult}`);
alert(`The result of subtraction ${subtractionResult}`);
alert(`The result of multiplication ${multiplicationResult}`);
alert(`The result of division ${divisionResult}`)