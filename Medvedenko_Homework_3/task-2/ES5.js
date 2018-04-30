function Worker(name, surname, rate, days) {
    const _name = name;
    const _surname = surname;
    const _rate = rate;
    const _days = days;

    this.getName = function () {
        return _name
    };

    this.getSurname = function () {
        return _surname
    };

    this.getRate = function () {
        return _rate
    };

    this.getDays = function () {
        return _days
    };

    this.getSalary = function () {
        return _rate * _days
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
