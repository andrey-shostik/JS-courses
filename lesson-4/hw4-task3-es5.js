var ThirdWorkerES5 = function (name , surname, rate, days) {
    /*   const _name = name;
       const _surname = surname;
       const _rate = rate;
       const _days = days;*/

    this.getName = function () {
        return name;
    };
    this.getSurname = function () {
        return surname;
    };
    this.getRate = function () {
        return rate;
    };
    this.getDays = function () {
        return days;
    };
    this.getSalary = function () {
        return days * rate;
    };
    this.setRate = function (newRate) {
        return rate = newRate;
    };
    this.setDays = function (newDays) {
        return days = newDays;
    };
}

const fifthIvan = new ThirdWorkerES5('Ivan', 'Ivanov', 10, 31);

fifthIvan.setRate(20);
fifthIvan.setDays(10);

console.log("Task3 ES5:");
console.log(fifthIvan.getName());
console.log(fifthIvan.getSurname());
console.log(fifthIvan.getRate());
console.log(fifthIvan.getDays());
console.log(fifthIvan.getSalary());
console.log("");