class Validator {
    static isEmail(email) {
        return /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(String(email).toLowerCase());
    }

    static isDomain(domain) {
        return /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/img.test(String(domain).toLowerCase());
    }

    static isDate(date) {
        return /(\d{2}\.\d{2}\.\d{4})/.test(date);
    }

    static isPhone(phone) {
        return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone);
    }
}

//const validator = new Validator();

console.log(Validator.isEmail('phphtml@mail.ru'));
console.log(Validator.isDomain('https://phphtml.net'));
console.log(Validator.isDomain('phphtml.net'));
console.log(Validator.isDate('12.05.2020'));
console.log(Validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны