/* Task-3.Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так: */

function Worker(name1, surname1, rate1, days1) {
    const name = name1;
    const surname = surname1;
    this._rate = rate1;
    this._days = days1;

    this.rate = function (rate) { //вирішив зробити одиночний гетер-сетер
        if (!arguments.length) { // здається так краще та коротше, як використовується на практиці?
            return this._rate;
        }
        this._rate = rate;
    };

    this.days = function (days) {
        if (!arguments.length) {
            return this._days;
        }
        this._days = days;
    };

    this.getSalary = function () {
        return `Заробітня плата ${name + "a" + " " + surname + "a"} складає: ${this._rate * this._days} грн`;
    };
}

const worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.rate()); //выведет 10
console.log(worker.days()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
//Теперь используем сеттер:
worker.rate(20); //увеличим ставку
worker.days(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10