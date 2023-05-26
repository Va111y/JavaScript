const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');

const addBtn = document.getElementById('add-btn');
const addResult = document.getElementById('add-result');

addBtn.addEventListener('click', function() {
    const number1 = number1Input.valueAsNumber;
    const number2 = number2Input.valueAsNumber;
    const sum = number1 + number2;
    addResult.innerHTML = sum;
    if (sum >= 0) {
      const opacity = Math.abs(sum) / 100 + 0.5;
      addResult.style.color = "green";
      addResult.style.opacity = `${opacity}`;
    } else {
      const opacity = Math.abs(sum) / 100 + 0.5;
      addResult.style.color = "red";
      addResult.style.opacity = `${opacity}`;
    }
})

const minBtn = document.getElementById('min-btn');
const minResult = document.getElementById('min-result');

minBtn.addEventListener('click', function() {
    const number1 = number1Input.valueAsNumber;
    const number2 = number2Input.valueAsNumber;
    const min = number1 - number2;
    minResult.innerHTML = min;
    if (min >= 0) {
      const opacity = Math.abs(min) / 100 + 0.5;
      minResult.style.color = "green";
      minResult.style.opacity = `${opacity}`;
    } else {
      const opacity = Math.abs(min) / 100 + 0.5;
      minResult.style.color = "red";
      minResult.style.opacity = `${opacity}`;
    }
});

const mulBtn = document.getElementById('mul-btn');
const mulResult = document.getElementById('mul-result');

mulBtn.addEventListener('click', function() {
    const number1 = number1Input.valueAsNumber;
    const number2 = number2Input.valueAsNumber;
    const mul = number1 * number2;
    mulResult.innerHTML = mul;
    if (mul >= 0) {
      const opacity = Math.abs(mul) / 100 + 0.5;
      mulResult.style.color = "green";
      mulResult.style.opacity = `${opacity}`;
    } else {
      const opacity = Math.abs(mul) / 100 + 0.5;
      mulResult.style.color = "red";
      mulResult.style.opacity = `${opacity}`;
    }
});

const divBtn = document.getElementById('div-btn');
const divResult = document.getElementById('div-result');

divBtn.addEventListener('click', function() {
    const number1 = number1Input.valueAsNumber;
    const number2 = number2Input.valueAsNumber;
    const div = number1 / number2;
    divResult.innerHTML = div;
    if (div >= 0) {
      const opacity = Math.abs(div) / 100 + 0.5;
      divResult.style.color = "green";
      divResult.style.opacity = `${opacity}`;
    } else {
      const opacity = Math.abs(div) / 100 + 0.5;
      divResult.style.color = "red";
      divResult.style.opacity = `${opacity}`;
    }
})

const maxBtn = document.getElementById('maxNumber-btn');
const maxResult = document.getElementById('maxNumber-result');

const numbers = [1, 4, 28, 472, 8652, 3, 84, 76, 2963, 9];

maxBtn.addEventListener('click', function () {
  let maxNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++){
      if (typeof numbers[i] == 'number') {
          if (numbers[i] > maxNumber){
              maxNumber = numbers [i];
          }
      }
      };
      maxResult.innerHTML = maxNumber;
      if (maxNumber >= 0) {
        const opacity = Math.abs(maxNumber) / 100 + 0.5;
        maxResult.style.color = "green";
        maxResult.style.opacity = `${opacity}`;
      } else {
        const opacity = Math.abs(maxNumber) / 100 + 0.5;
        maxResult.style.color = "red";
        maxResult.style.opacity = `${opacity}`;
      }
});

const minNumberBtn = document.getElementById('minNumber-btn');
const minNumberResult = document.getElementById('minNumber-result');

minNumberBtn.addEventListener('click', function () {
  let minNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++){
      if (typeof numbers[i] == 'number') {
          if (numbers[i] < minNumber){
              minNumber = numbers [i];
          }
      }
      };
      minNumberResult.innerHTML = minNumber;
      if (minNumber >= 0) {
        const opacity = Math.abs(minNumber) / 100 + 0.5;
        minNumberResult.style.color = "green";
        minNumberResult.style.opacity = `${opacity}`;
      } else {
        const opacity = Math.abs(minNumber) / 100 + 0.5;
        minNumberResult.style.color = "red";
        minNumberResult.style.opacity = `${opacity}`;
      }
});
