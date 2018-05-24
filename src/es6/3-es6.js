class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    getRate() {
        return this._rate;
    }

    getDays() {
        return this._days;
    }

    getSalary() {
        return this._rate * this._days;
    }

    setRate(newRate) {
        this._rate = newRate;
    }

    setDays(newDays) {
        this._days = newDays;
    }
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