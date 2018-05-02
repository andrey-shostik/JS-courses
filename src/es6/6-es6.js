// 6. Реализуйте класс BaseValidator, который будет иметь один публичный метод в прототипе validate.
// Также нужно реализовать классы EmailValidator, DomainValidator, DateValidator, PhoneValidator,
// которые будут наследоваться от BaseValidator и определять метод validate каждый по-своему.

// Дополнительное задание: в классах(не в прототипах) EmailValidator, DomainValidator, DateValidator, PhoneValidator
// реализовать кэширование. Непосредственно в классе(не в прототипе) BaseValidator реализовать метод getCachedValue,
// который будет брать закэшированное значение из нужного класса и возвращать его вместо вычеслений.

class BaseValidator extends Validator {
    constructor() {
        super();
        this.cache = {};
    }

    getCachedValue(value) {
        return this.cache[value];
    };
}

BaseValidator.prototype.validate = function () {};

class EmailValidator extends BaseValidator {
    validate(email) {
        return (email in this.cache) ? super.getCachedValue(email) : (this.cache[email] = this.isEmail(email));
    }
}

class DomainValidator extends BaseValidator {
    validate(domain) {
        return (domain in this.cache) ? super.getCachedValue(domain) : (this.cache[domain] = super.isDomain(domain));
    }
}

class DateValidator extends BaseValidator {
    validate(date) {
        return (date in this.cache) ? super.getCachedValue(date) : (this.cache[date] = super.isDate(date));
    }
}

class PhoneValidator extends BaseValidator {
    validate(phone) {
        return (phone in this.cache) ? super.getCachedValue(phone) : (this.cache[phone] = super.isPhone(phone));
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

