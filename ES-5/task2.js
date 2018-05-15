/* Task-2. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так: */
function Worker(name1, surname1, rate1, days1) {
    const name = name1;
    const surname = surname1;
    const rate = rate1;
    const days = days1;

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
        return `Заробітня плата складає: ${rate * days} грн`;
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31