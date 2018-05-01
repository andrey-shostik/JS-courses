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

    getCachedValue() {
        return this.cache;
    };
}

BaseValidator.prototype.validate = () => {};

class EmailValidator extends BaseValidator {
    validate(email) {
        if (super.isEmail(email)) {
            this.cache.email = email;

            return true;
        }
    }
}

class DomainValidator extends BaseValidator {
    validate(domain) {
        if (super.isDomain(domain)) {
            this.cache.domain = domain;

            return true;
        }
    }
}

class DateValidator extends BaseValidator {
    validate(date) {
        if (super.isDate(date)) {
            this.cache.date = date;

            return true;
        }
    }
}

class PhoneValidator extends BaseValidator {
    validate(phone) {
        if (super.isPhone(phone)) {
            this.cache.phone = phone;

            return true;
        }
    }
}

const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();
const baseValidator = new BaseValidator();

console.group('6');
console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны
console.groupEnd('6');

console.group('6.1');
console.log(emailValidator.getCachedValue('phphtml@mail.ru'));
console.groupEnd('6.1');
