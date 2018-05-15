/* Task-3.Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так: */

function Worker(name1, surname1, rate1, days1) {
    const name = name1;
    const surname = surname1;
    let rate = rate1;
    let days = days1;

    this.rate = function (value) { //вирішив зробити одиночний гетер-сетер
        if (!arguments.length) { // здається так краще та коротше, як використовується на практиці?
            return rate;
        }
        rate = value;
    };

    this.days = function (value) {
        if (!arguments.length) {
            return days;
        }
        days = value;
    };

    this.getSalary = function () {
        return `Заробітня плата ${name + "a" + " " + surname + "a"} складає: ${rate * days} грн`;
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