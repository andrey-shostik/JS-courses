// Задание 3. ES5

/*
* Модифицируйте класс Worker из предыдущей задачи следующим образом:
* для свойства rate и для свойства days сделайте еще и методы-сеттеры.
* Наш класс теперь будет работать так:
*
* const worker = new Worker('Иван', 'Иванов', 10, 31);
*
* console.log(worker.getRate()); //выведет 10
* console.log(worker.getDays()); //выведет 31
* console.log(worker.getSalary()); //выведет 310 - то есть 10*31
*
* Теперь используем сеттер:
* worker.setRate(20); //увеличим ставку
* worker.setDays(10); //уменьшим дни
* console.log(worker.getSalary()); //выведет 200 - то есть 20*10
*/

function Worker(name, surname, rate, days) {

  this.getName = function() {
    return name;
    };

  this.getSurname = function() {
    return surname;
    };

  this.getRate = function() {
    return rate;
    };

  this.setRate = function(newRate) {
    rate = newRate;
    };

  this.getDays = function() {
    return days;
    };

  this.setDays = function(newDays) {
    days = newDays;
    };

  this.getSalary = function() {
    return rate * days;
    };
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log('Задание 3. ES5');

console.log( worker.getName() ); //выведет 'Иван'
console.log( worker.getSurname() ); //выведет 'Иванов'
console.log( worker.getRate() ); //выведет 10
console.log( worker.getDays() ); //выведет 31
console.log( worker.getSalary() ); //выведет 310 - то есть 10*31

worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log( worker.getSalary() ); //выведет 200 - то есть 20*10