function Validator() {
    this.isEmail = function (email) {
        return /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(email);
    };

    this.isDomain = function (domain) {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(domain);
    };

    this.isDate = function (date) {
        return /^\d\d\.\d\d\.\d{4}$/.test(date);
    };

    this.isPhone = function (phone) {
        return /^[0-9+\(\)#\.\s\/ext-]+$/.test(phone);
    };
}

const validator = new Validator();

console.log('Задание 5. ES5');

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны