class Worker {
    constructor(name1, surname1, rate1, days1) {
        this.name = name1;
        this.surname = surname1;
        this.rate = rate1;
        this.days = days1;
    }

    getSalary() {
        return this.rate * this.days;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getRate() {
        return this.rate;
    }

    getDays() {
        return this.days;
    }

    setRate(rate2) {
        this.rate = rate2;
    }

    setDays(days2) {
        this.days = days2;
    }
}

const myWorker = new Worker('Vasya', 'Ivanov', 10, 20);

console.log(myWorker.getName());
console.log(myWorker.getSurname());
console.log(myWorker.getRate());
console.log(myWorker.getDays());
console.log(myWorker.getSalary());

myWorker.setRate(14);
myWorker.setDays(13);
console.log(myWorker.getSalary());