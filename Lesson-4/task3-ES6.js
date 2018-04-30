class Worker {
    constructor (name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;

    }
    getName () {
        return this._name;
    }
    getSurname () {
        return this._surname;
    }
    getRate () {
        return this._rate;
    }
    getDays () {
        return this._days;
    }
    getSalary () {
        return this._days * this._rate;
    }
    setRate (value) {
        return this._rate = value;
    }
    setDays (value) {
        return this._days = value;
    }

}


const worker = new Worker('Иван', 'Иванов', 10, 31);

worker.setDays(10);
worker.setRate(20);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());
