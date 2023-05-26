function Accumulator (firstNumber) {
    this.value = firstNumber;
  }
  
  Accumulator.prototype.increment = function () {
    this.value = this.value + 1;
  }
  
  Accumulator.prototype.decrement = function () {
    this.value = this.value - 1;
  }
  
  const accumul = new Accumulator (5)
  console.log(accumul.value);
  
  accumul.increment();
  console.log(accumul.value);
  
  accumul.decrement();
  console.log(accumul.value);
  
  function CancelableAccumulator (firstNumber) {
    Accumulator.call(this, firstNumber);
    this.returnValue = firstNumber;
  }
  
  CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
  CancelableAccumulator.prototype.constructor = CancelableAccumulator;
  
  CancelableAccumulator.prototype.clear = function () {
    this.value = this.returnValue;
  }
  
  const cancel = new CancelableAccumulator(5);
  cancel.clear();
  console.log(cancel.value)