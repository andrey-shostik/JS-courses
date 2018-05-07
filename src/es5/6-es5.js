BaseValidator.prototype = new Validator();

function BaseValidator() {
    this.cache = {};

    this.getCachedValue = function (value) {
        return this.cache[value];
    }
}

BaseValidator.prototype.validate = function () {};

EmailValidator.prototype = new BaseValidator();

function EmailValidator() {
    this.validate = function (email) {
        return (email in this.cache) ? this.getCachedValue(email) : (this.cache[email] = this.isEmail(email));
    }
}

DomainValidator.prototype = new BaseValidator();

function DomainValidator() {
    this.validate = function (domain) {
        return (domain in this.cache) ? this.getCachedValue(domain) : (this.cache[domain] = this.isDomain(domain));
    }
}

DateValidator.prototype = new BaseValidator();

function DateValidator() {
    this.validate = function (date) {
        return (date in this.cache) ? this.getCachedValue(date) : (this.cache[date] = this.isDate(date));
    }
}

PhoneValidator.prototype = new BaseValidator();

function PhoneValidator() {
    this.validate = function (phone) {
        return (phone in this.cache) ? this.getCachedValue(phone) : (this.cache[phone] = this.isPhone(phone));
    }
}

const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();

console.group('6');
console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны
console.groupEnd('6');

