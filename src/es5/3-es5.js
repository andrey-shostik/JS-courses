function Worker(name, surname, rate, days) {
    let _name = name;
    let _surname = surname;
    let _rate = rate;
    let _days = days;

    this.getName = function () {
        return _name;
    };

    this.getSurname = function () {
        return _surname;
    };

    this.getRate = function () {
        return _rate;
    };

    this.getDays = function () {
        return _days;
    };

    this.getSalary = function () {
        return _rate * _days;
    };

    this.setRate = function (newRate) {
        _rate = newRate;
    };
    this.setDays = function (newDays) {
        _days = newDays;
    };
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.group('3.1');
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
console.groupEnd('3.1');

// Теперь используем сеттер:

console.group('3.2');
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
console.groupEnd('3.2');