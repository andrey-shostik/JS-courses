/* Задание №3. Модифицируйте класс Worker из предыдущей задачи следующим образом: 
для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10 */

function Worker(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
};

Worker.prototype = {
    getName: function () {
        return this._name;
    },
    getSurname: function () {
        return this._surname;
    },
    getRate: function () {
        return this._rate;
    },
    setRate: function (rate) {
        this._rate = rate;
    },
    getDays: function () {
        return this._days;
    },
    setDays: function (days) {
        this._days = days;
    },
    getSalary: function () {
        return this._rate * this._days
    }
};

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());

worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary());
