// Задание 2. ES5

/*
* Модифицируйте класс Worker из предыдущей задачи следующим образом:
* сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
* Наш класс теперь будет работать так:
*
* const worker = new Worker('Иван', 'Иванов', 10, 31);
*
* console.log(worker.getName()); //выведет 'Иван'
* console.log(worker.getSurname()); //выведет 'Иванов'
* console.log(worker.getRate()); //выведет 10
* console.log(worker.getDays()); //выведет 31
* console.log(worker.getSalary()); //выведет 310 - то есть 10*31
*/

function Worker(name, surname, rate, days) {
  this._name = name;
  this._surname = surname;
  this._rate = rate;
  this._days = days;

  this.getName = function() {
    return this._name;
    };

  this.getSurname = function() {
    return this._surname;
    };

  this.getRate = function() {
    return this._rate;
    };

  this.getDays = function() {
    return this._days;
    };

  this.getSalary = function() {
    return this._rate * this._days;
    };
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log('Задание 2. ES5');

console.log( worker.getName() ); //выведет 'Иван'
console.log( worker.getSurname() ); //выведет 'Иванов'
console.log( worker.getRate() ); //выведет 10
console.log( worker.getDays() ); //выведет 31
console.log( worker.getSalary() ); //выведет 310 - то есть 10*31