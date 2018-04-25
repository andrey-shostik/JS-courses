/* Задание №2. Модифицируйте класс Worker из предыдущей задачи следующим образом: 
сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31 */

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
    getDays: function () {
        return this._days;
    },
    getSalary: function () {
        const salary = this._rate * this._days
        return salary;
    }
};

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());