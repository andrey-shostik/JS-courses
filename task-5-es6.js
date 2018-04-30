/* Задание №5. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail
параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true,
если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
метод isDate для проверки даты и метод isPhone для проверки телефона:
var validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны */

class Validator {
    isEmail (string) {
        return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(string);
    }

    isDomain (string) {
        return /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/.test(string);
    }

    isDate (string) {
        return /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(string);
    }

    isPhone (string) {
        return /^[+0-9]{4}\s\([0-9]{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(string);
    }
};

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+380 (67) 123-45-67'));

console.log(validator.isEmail('wrewer'));
console.log(validator.isDomain('234243'));
console.log(validator.isDate('cdfefwfe'));
console.log(validator.isPhone('few5'));