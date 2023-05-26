/*Функція на перевірку порожнього*/

function isObjectEmpty (obj) {
    return Object.keys(obj).length === 0;
}

/*Об'єкт з іменем*/
const user = {
    name: 'Анастасія',
    age: 25,
    sayHello: function() {
        console.log('Привіт, я ' + this.name +', мені ' + this.age + ' років');
    }
};

function isObjectEmpty (obj) {
    return Object.keys(obj).length === 0;
}

user.sayHello();

/*Калькулятор*/

const calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    ask() {
      this.a = +prompt('Введіть перше число');
      this.b = +prompt('Введіть друге число');
    }
  };
  
  calculator.ask();
  alert(calculator.sum());
  alert(calculator.mul())