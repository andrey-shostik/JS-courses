//
// //
// //
// #2

function Worker(name, surname, days, rate) {
    this.getName = function () {
        return name;
    };
    this.getSurname = function () {
      return surname;
    };
    this.getDays = function () {
        return days;
    };
    this.getRate = function () {
        return rate;
    };
    this.getSalary = function () {
        return days * rate;
    };
}


const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

