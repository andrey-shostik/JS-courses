
//
//
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
    this.setDays = function (numberDays) {
        return days = numberDays;
    };
    this.setRate = function (numberRate) {
        return rate = numberRate;
    };
}


const worker = new Worker('Иван', 'Иванов', 10, 31);

worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());

//


