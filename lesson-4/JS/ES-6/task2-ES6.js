// Задание 2. ES6

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

class Worker {

  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
    }

  getName() {
    return this._name;
    };

  getSurname() {
    return this._surname;
    };

  getRate() {
    return this._rate;
    };

  getDays() {
    return this._days;
    };

  getSalary() {
    return this._rate * this._days;
    };
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log('Задание 2. ES6');

console.log( worker.getName() ); //выведет 'Иван'
console.log( worker.getSurname() ); //выведет 'Иванов'
console.log( worker.getRate() ); //выведет 10
console.log( worker.getDays() ); //выведет 31
console.log( worker.getSalary() ); //выведет 310 - то есть 10*31