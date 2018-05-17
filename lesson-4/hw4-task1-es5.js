var FirstWorkerES5 = function (name , surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = function () {
        return this.rate * this.days
    }
}

var ivan = new FirstWorkerES5('Ivan', 'Ivanov', 10, 31);

console.log("Task1 ES5:");
console.log(ivan.name); //выведет 'Иван'
console.log(ivan.surname); //выведет 'Иванов'
console.log(ivan.rate); //выведет 10
console.log(ivan.days); //выведет 31
console.log(ivan.getSalary()); //выведет 310 - то есть 10*31
console.log("");