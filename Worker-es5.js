console.log("/////////////////////////////////////////// 1 ///////////////////////////////////////////////");

// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя),
// surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также
// класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата -
// это произведение (умножение) ставки rate на количество отработанных дней days. Реализовать на
// ES5 функциях-конструкторах и на ES6 class.

// var worker = new Worker('Иван', 'Иванов', 10, 31);
//
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31


function WorkerEs5(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;

    this.getSalary = function() {
        return this.rate * this.days
    }
}

var worker = new WorkerEs5('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

console.log("/////////////////////////////////////////// 2 ///////////////////////////////////////////////");

// 2. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства
// приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:

// var worker = new Worker('Иван', 'Иванов', 10, 31);
//
// console.log(worker.getName()); //выведет 'Иван'
// console.log(worker.getSurname()); //выведет 'Иванов'
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

function WorkerGetEs5(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;

    this.getName = function() {
        return this._name
    };

    this.getSurname = function() {
        return this._surname
    };

    this.getRate = function() {
        return this._rate
    };

    this.getDays = function() {
        return this._days
    };

    this.getSalary = function() {
        return this._rate * this._days
    };
}

var workerGetEs5 = new WorkerGetEs5('Иван', 'Иванов', 10, 31);

console.log(workerGetEs5.getName()); //выведет 'Иван'
console.log(workerGetEs5.getSurname()); //выведет 'Иванов'
console.log(workerGetEs5.getRate()); //выведет 10
console.log(workerGetEs5.getDays()); //выведет 31
console.log(workerGetEs5.getSalary()); //выведет 310 - то есть 10*31

console.log("/////////////////////////////////////////// 3 ///////////////////////////////////////////////");

// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для
// свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
//
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
//
// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10


function WorkerSetEs5(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;

    this.getName = function() {
        return this._name
    };

    this.getSurname = function() {
        return this._surname
    };

    this.getRate = function() {
        return this._rate
    };

    this.setRate = function(rate) {
        this._rate = rate
    };

    this.getDays = function() {
        return this._days
    };

    this.setDays = function(days) {
        this._days = days
    };

    this.getSalary = function() {
        return this._rate * this._days
    };
}

var workerSetEs5 = new WorkerSetEs5('Иван', 'Иванов', 10, 31);
//
console.log(workerSetEs5.getRate()); //выведет 10
console.log(workerSetEs5.getDays()); //выведет 31
console.log(workerSetEs5.getSalary()); //выведет 310 - то есть 10*31
//
// //Теперь используем сеттер:
workerSetEs5.setRate(20); //увеличим ставку
workerSetEs5.setDays(10); //уменьшим дни
console.log(workerSetEs5.getSalary()); //выведет 200 - то есть 20*10

