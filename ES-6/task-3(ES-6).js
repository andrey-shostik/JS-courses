/* Task-3.Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так: */
class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    get getRate() {
        return this._rate;
    };

    get getDays() {
        return this._days;
    };

    get getSalary() {
        return `Заробітня плата ${this._name + "a" + " " + this._surname + "a"} складає: ${this._rate * this._days} грн`;
    }

    set setRate(rate) {
        return this._rate = rate;
    }

    set setDays(days) {
        return this._days = days;
    }
}

const worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.getRate); //выведет 10
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate = 18; //увеличим ставку
worker.setDays = 10; //уменьшим дни
console.log(worker.getSalary); //выведет 200 - то есть 20*10