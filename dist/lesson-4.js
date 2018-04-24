'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 1 . Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
// rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
// который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// Реализовать на ES5 функциях-конструкторах и на ES6 class.
var Worker = function () {
    function Worker(name, surname, rate, days) {
        _classCallCheck(this, Worker);

        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    _createClass(Worker, [{
        key: 'getSalary',
        value: function getSalary() {
            return this.rate * this.days;
        }
    }]);

    return Worker;
}();

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.group('1');
console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
console.groupEnd('1');

// 2. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными,
// а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:

var Worker2 = function () {
    function Worker2(name, surname, rate, days) {
        _classCallCheck(this, Worker2);

        this._privateName = name;
        this._privateSurname = surname;
        this._privateRate = rate;
        this._privateDays = days;
    }

    _createClass(Worker2, [{
        key: 'getName',
        value: function getName() {
            return this._privateName;
        }
    }, {
        key: 'getSurname',
        value: function getSurname() {
            return this._privateSurname;
        }
    }, {
        key: 'getRate',
        value: function getRate() {
            return this._privateRate;
        }
    }, {
        key: 'getDays',
        value: function getDays() {
            return this._privateDays;
        }
    }, {
        key: 'getSalary',
        value: function getSalary() {
            return this._privateRate * this._privateDays;
        }
    }]);

    return Worker2;
}();

var worker2 = new Worker2('Иван', 'Иванов', 10, 31);

console.group('2');
console.log(worker2.getName()); //выведет 'Иван'
console.log(worker2.getSurname()); //выведет 'Иванов'
console.log(worker2.getRate()); //выведет 10
console.log(worker2.getDays()); //выведет 31
console.log(worker2.getSalary()); //выведет 310 - то есть 10*31
console.groupEnd('2');
//
// // 3. Модифицируйте класс Worker из предыдущей задачи следующим образом:
// // для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
//
// console.group('3.1');
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// console.groupEnd('3.1');
//
// // Теперь используем сеттер:
//
// console.group('3.2');
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10
// console.groupEnd('3.2');
//
// // 4. Реализуйте класс MyString, который будет иметь следующие методы:
// // статический метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде,
// // статический метод ucFirst(), который параметром принимает строку, а возвращает эту же строку,
// // сделав ее первую букву заглавной и статический метод ucWords, который принимает строку и
// // делает заглавной первую букву каждого слова этой строки.
//
// console.group('4');
// console.log(MyString.reverse('abcde')); //выведет 'edcba'
// console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
// console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
// console.groupEnd('4');
//
// // 5. Реализуйте класс Validator, который будет проверять строки.
// // К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
// // Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: м
// // етод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:
//
// const validator = new Validator();
//
// console.group('5');
// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны
// console.groupEnd('5');