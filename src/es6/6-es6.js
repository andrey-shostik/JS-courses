class BaseValidator extends Validator {
    constructor() {
        super();
        this.cache = {};
    }

    getCachedValue(value) {
        return this.cache[value];
    };
}

BaseValidator.prototype = Object.create(Validator.prototype);

class EmailValidator extends BaseValidator {
    validate(email) {
        return (email in this.cache) ? this.getCachedValue(email) : (this.cache[email] = this.isEmail(email));
    }
}

class DomainValidator extends BaseValidator {
    validate(domain) {
        return (domain in this.cache) ? this.getCachedValue(domain) : (this.cache[domain] = this.isDomain(domain));
    }
}

class DateValidator extends BaseValidator {
    validate(date) {
        return (date in this.cache) ? this.getCachedValue(date) : (this.cache[date] = this.isDate(date));
    }
}

class PhoneValidator extends BaseValidator {
    validate(phone) {
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

