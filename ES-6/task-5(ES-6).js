/* Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона: */

//ES-6...

class Validator {

    isEmail(email) {
        return /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(email);
    }

    isDomain(domain) {
        return /\w+\.\w+/.test(domain);
    }

    isDate(date) {
        return /\d{2}\d{2}\d{4}/.test(date);
    }

    isPhone(phone) {
        return /[+]\d+\s/.test(phone);
    }
}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей стран