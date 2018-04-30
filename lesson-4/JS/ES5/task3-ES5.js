/*
Модифицируйте класс Worker из предыдущей задачи следующим образом:
для свойства rate и для свойства days сделайте еще и методы-сеттеры.
Наш класс теперь будет работать так:

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
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

    this.setRate = function(newRate) {
        this._rate = newRate;
    }

    this.getDays = function() {
        return this._days;
    };

    this.setDays = function(newDays) {
        this._days = newDays;
    }

    this.getSalary = function() {
        return this._rate * this._days;
    };
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log( worker.getName() ); //выведет 'Иван'
console.log( worker.getSurname() ); //выведет 'Иванов'
console.log( worker.getRate() ); //выведет 10
console.log( worker.getDays() ); //выведет 31
console.log( worker.getSalary() ); //выведет 310 - то есть 10*31

worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log( worker.getSalary() ); //выведет 200 - то есть 20*10