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

}

const myWorker = new Worker('Vasya', 'Ivanov', 15, 22);

console.log(myWorker.name);
console.log(myWorker.surname);
console.log(myWorker.rate);
console.log(myWorker.days);
console.log(myWorker.getSalary());