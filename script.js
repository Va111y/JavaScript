/*Функція ділення,моження і т.п.*/

function sum(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
    }
}

function difference(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
    return a - b;
    }
}

function product(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
    return a * b;
    }
}

function quotient(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
    return a / b;
    }
}

console.log(sum(10,2));
console.log(difference(10,2));
console.log(product(10,2));
console.log(quotient(10,2));

/*Фунція мінмах значення*/

function findMaxNumber (numbers) {
    let maxNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (typeof numbers[i] == 'number') {
            if (numbers[i] > maxNumber){
                maxNumber = numbers [i];
            }
        }
        };
    return maxNumber;
}

function findMinNumber (numbers) {
    let minNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (typeof numbers[i] == 'number') {
            if (numbers[i] < minNumber){
                minNumber = numbers [i];
            }
        }
        };
    return minNumber;
}

const numbers = [1, 4, 28, 472, 8652, 3, 84, 76, 2963, 9];

const maxNumber = findMaxNumber (numbers);
const minNumber = findMinNumber (numbers);

console.log(maxNumber, minNumber);