console.log("/////////////////////////////////////////// ES-6 ///////////////////////////////////////////////");
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

class Worker {
    constructor(name, surname, rate, days,) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    };

    getSalary() {
        return this.rate * this.days
    }
}

worker = new Worker('Иван', 'Иванов', 10, 31);

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

class WorkerGet {
    constructor(name, surname, rate, days,) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    };

    getName() {
        return this._name
    }

    getSurname() {
        return this._surname
    }

    getRate() {
        return this._rate
    }

    getDays() {
        return this._days
    }

    getSalary() {
        return this._rate * this._days
    }
}

let workerGet = new WorkerGet('Иван', 'Иванов', 10, 31);

console.log(workerGet.getName()); //выведет 'Иван'
console.log(workerGet.getSurname()); //выведет 'Иванов'
console.log(workerGet.getRate()); //выведет 10
console.log(workerGet.getDays()); //выведет 31
console.log(workerGet.getSalary()); //выведет 310 - то есть 10*31

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

class WorkerSet {
    constructor(name, surname, rate, days,) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    };

    getName() {
        return this._name
    }

    getSurname() {
        return this._surname
    }

    getRate() {
        return this._rate
    }

    setRate(rate) {
        this._rate = rate
    }

    getDays() {
        return this._days
    }

    setDays(days) {
        this._days = days
    }

    getSalary() {
        return this._rate * this._days
    }
}

let workerSet = new WorkerSet('Иван', 'Иванов', 10, 31);
//
console.log(workerSet.getRate()); //выведет 10
console.log(workerSet.getDays()); //выведет 31
console.log(workerSet.getSalary()); //выведет 310 - то есть 10*31
//
// //Теперь используем сеттер:
workerSet.setRate(20); //увеличим ставку
workerSet.setDays(10); //уменьшим дни
console.log(workerSet.getSalary()); //выведет 200 - то есть 20*10

