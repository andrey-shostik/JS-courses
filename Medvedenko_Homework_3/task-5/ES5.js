function Validator() {
    this.isEmail = function (email) {
        return /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(String(email).toLowerCase());
    };

    this.isDomain = function (domain) {
        return /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/img.test(String(domain).toLowerCase());
    };

    this.isDate = function (date) {
       return /(\d{2}\.\d{2}\.\d{4})/.test(date);
    };

    this.isPhone = function (phone) {
       return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone);
    };
}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDomain('https://phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29)817-68-92')); //тут можете формат своей страны