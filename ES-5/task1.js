/*Task-1.Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. Реализовать на ES5 функциях-конструкторах и на ES6 class.*/

//ES-5...

function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;

    this.getSalary = function () {
        return `Заробітня плата складає: ${this.rate * this.days} грн`;
    }

}

/*Worker.prototype.getSalary = function () {
    return `Заробітня плата складає: ${this.rate * this.days} грн`;
};*/

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
