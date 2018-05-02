// Задание 5. ES6

/*
* Реализуйте класс Validator, который будет проверять строки.
* К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
* является ли она корректным емейлом или нет.
* Если является - возвращает true, если не является - то false.
* Кроме того, класс будет иметь следующие методы:
* метод isDomain для проверки домена,
* метод isDate для проверки даты и
* метод isPhone для проверки телефона:
*
* const validator = new Validator();
*
* console.log(validator.isEmail('phphtml@mail.ru'));
* console.log(validator.isDomain('phphtml.net'));
* console.log(validator.isDate('12.05.2020'));
* console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны
*/

class Validator {
  isEmail(email) {
    return /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(email);
    };

  isDomain(domain) {
    return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(domain);
    };

  isDate(date) {
    return /^\d\d\.\d\d\.\d{4}$/.test(date);
    };

  isPhone(phone) {
    return /^[0-9+\(\)#\.\s\/ext-]+$/.test(phone);
    };
}

const validator = new Validator();

console.log('Задание 5. ES6');

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны