function Worker(name, surname, rate, days) {
    const _name = name;
    const _surname = surname;
    let _rate = rate;
    let _days = days;

    this.getName = function () {
        return _name
    };

    this.getSurname = function () {
        return _surname
    };

    this.setRate = function (value) {
        _rate = value;
    };

    this.getRate = function () {
        return _rate
    };

    this.setDays = function (value) {
        _days = value
    };

    this.getDays = function () {
        return _days
    };

    this.getSalary = function () {
        return _rate * _days
    };
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10

console.log(worker);

