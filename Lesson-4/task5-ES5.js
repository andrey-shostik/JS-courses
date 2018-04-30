function Validator() {
    this.isEmail = function (string) {
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(string);

    };
    this.isDomain = function (string) {
        var regexDomain = /^((([0-9]{1,3}\.){3}[0-9]{1,3})|(([a-zA-Z0-9]+(([\-]?[a-zA-Z0-9]+)*\.)+)*[a-zA-Z]{2,}))$/;
        return regexDomain.test(string);
    };
    this.isDate = function (string) {
        var regexDate= /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/;
        return regexDate.test(string);
    };
    this.isPhone = function (string) {
        var regexPhone = /[^0-9+()\s-]/gi;
        return !regexPhone.test(string);
    };

}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+380 (29) 817-68-92')); //тут можете формат своей страны


