function Validator() {}

Validator.prototype.isEmail = function (str) {
    return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(str);
};

Validator.prototype.isDomain = function (str) {
    return /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/.test(str);
};

Validator.prototype.isDate = function (str) {
    return /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(str);
};

Validator.prototype.isPhone = function (str) {
    return /^[+0-9]{4}\s\([0-9]{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(str);
};

const validator = new Validator();

console.group('5');
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+380 (63) 817-68-92')); //тут можете формат своей страны
console.groupEnd('5');