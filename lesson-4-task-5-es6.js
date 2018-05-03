class Validator {
    constructor() {

    }

    isEmail(email) {
        return /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(email);
    }

    isDomain(domain) {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(domain);
    }

    isDate(date) {
        return /^\d\d\.\d\d\.\d{4}$/.test(date);
    }

    isPhone(phone) {
        return /^[0-9+\(\)#\.\s\/ext-]+$/.test(phone);
    }
}

const validator = new Validator();

console.log('Задание 5. ES5');

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны