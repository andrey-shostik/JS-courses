function Worker(name1, surname1, rate1, days1) {
    const name = name1;
    const surname = surname1;
    let rate = rate1;
    let days = days1;

    this.getSalary  = () => {
        return rate * days;
    }

    this.getName = () => {
        return name;
    }

    this.getSurname = () => {
        return surname;
    }

    this.getRate = () => {
        return rate;
    }

    this.getDays = () => {
        return days;
    }

    this.setRate = (rate2) => {
        rate = rate2;
    }

    this.setDays = (days2) => {
        days = days2;
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