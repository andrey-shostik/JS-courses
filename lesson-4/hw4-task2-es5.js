var SecondWorkerES5 = function (name , surname, rate, days) {
    const _name = name;
    const _surname = surname;
    const _rate = rate;
    const _days = days;

    this.getName = function () {
        return _name;
    };

    this.getSurname = function () {
        return _surname;
    };

    this.getRate = function () {
        return _rate;
    };

    this.getDays = function () {
        return _days;
    };

    this.getSalary = function () {
        return _days * _rate;
    };
}

const thirdIvan = new SecondWorkerES5('Ivan', 'Ivanov', 10, 31);

console.log("Task2 ES5:");
console.log(thirdIvan.getName()); //выведет 'Иван'
console.log(thirdIvan.getSurname()); //выведет 'Иванов'
console.log(thirdIvan.getRate()); //выведет 10
console.log(thirdIvan.getDays()); //выведет 31
console.log(thirdIvan.getSalary()); //выведет 310 - то есть 10*31
console.log("");