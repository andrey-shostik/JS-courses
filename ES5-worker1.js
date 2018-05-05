function Worker(name1, surname1, rate1, days1) {
    this.name = name1;
    this.surname = surname1;
    this.rate = rate1;
    this.days = days1;

    this.getSalary  = () => {
        return rate * days;
    }
}

const myWorker = new Worker('Vasya', 'Ivanov', 10, 20);

console.log(myWorker.name);
console.log(myWorker.surname);
console.log(myWorker.rate);
console.log(myWorker.days);
console.log(myWorker.getSalary());