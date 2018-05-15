/* Task-2. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так: */
class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    get getName() {    // краще робити через get, так як тут, чи просто через метод getName(){..};?
        return this._name;
    };

    get getSurname() {
        return this._surname;
    };

    get getRate() {
        return this._rate;
    };

    get getDays() {
        return this._days;
    };

    get getSalary() {
        return `Заробітня плата складає: ${this._rate * this._days} грн`;
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName); //выведет 'Иван'
console.log(worker.getSurname); //выведет 'Иванов'
console.log(worker.getRate); //выведет 10
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary); //выведет 310 - то есть 10*31