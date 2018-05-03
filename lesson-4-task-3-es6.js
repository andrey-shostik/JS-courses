class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;

    }
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
        return this._rate*this._days
    }

    setDays(valueDays) {
        return this._days = valueDays;
    }

    setRate(valueRate) {
        return this._rate = valueRate;
    }


}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10