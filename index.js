function findSum (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number'){
      sum = sum + arr[i]
      }
    };
    return sum;
  }
  
  const arr = [1,2,3];
  
  function findMaxMin (arr) {
    let max = arr[0];
    let min = arr[0]; 
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
          if (max < arr[i]) {
              max = arr [i];
          }
          if (min > arr[i]) {
              min = arr [i];
          }
      }
    }
  
    return {
      max: max,
      min: min,
    }
  }
  
  // /*Ялиночка*/
  // let row = '#';
  // for (let i = 1; i <= 5; i++) {
  //   console.log (row);
  //   row += '#';
  // }
  
  
  function Accumulator (firstNumber) {
    this.value = firstNumber;
  }
  
  Accumulator.prototype.increment = function () {
    this.value = this.value + 1;
  }
  
  Accumulator.prototype.decrement = function () {
    this.value = this.value - 1;
  }
  
  function CancelableAccumulator (firstNumber) {
    Accumulator.call(this, firstNumber);
    this.returnValue = firstNumber;
  }
  
  CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
  CancelableAccumulator.prototype.constructor = CancelableAccumulator;
  
  CancelableAccumulator.prototype.clear = function () {
    this.value = this.returnValue;
  }
  
  // const cancel = new CancelableAccumulator(5);
  // cancel.clear();
  // console.log(cancel.value)
  
  function makePhotoBigger () {
    this.classList.add("clickPhoto-bigger");
    this.removeEventListener("click", makePhotoBigger);
    this.addEventListener("click", makePhotoSmaller)
  }
  
  function makePhotoSmaller () {
    this.classList.remove("clickPhoto-bigger");
    this.classList.add("clickPhoto-smaller");
    setTimeout (() => {
        this.classList.remove("clickPhoto-smaller");
        this.removeEventListener("click", makePhotoSmaller);
        this.addEventListener("click", makePhotoBigger);
    }, 2000);
    makePhotoBigger();
  }
  
  photo.addEventListener("click", makePhotoBigger)
  
  const aNav = document.getElementById('A-nav');
  const sectionA = document.getElementById('A-section');
  
  document.addEventListener('keydown', (event) => {
      if(event.key === 'a' || event.key === 'A') {
          const section = sectionA.getBoundingClientRect();
          window.scrollTo ({
              top: section.top,
              left: section.left,
              behavior: 'smooth'
          });
      }
  })