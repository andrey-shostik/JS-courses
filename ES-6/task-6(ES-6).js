class BaseValidator {
    constructor() {
        this.cacheBlock = {};
    }

    getCachedValue(val) {
        return this.cacheBlock[val]
    }
}

BaseValidator.prototype.validate = function () {

};



class EmailValidator extends BaseValidator {

    validate(email) {
        if (this.getCachedValue(email) !== undefined) {
            return this.cacheBlock[email]
        } else {
            const testValue = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(email);
            this.cacheBlock[email] = testValue;
            return testValue;
        }
    }
}


class DomainValidator extends BaseValidator {

    validate(domain) {
        if (this.getCachedValue(domain) !== undefined) {
            return this.cacheBlock[domain]
        } else {
            const testValue = /\w+\.\w+/.test(domain);
            this.cacheBlock[domain] = testValue;
            return testValue;
        }
    }
}


class DateValidator extends BaseValidator {
    validate(date) {
        if (this.getCachedValue(date) !== undefined) {
            return this.cacheBlock[date]
        } else {
            const testValue = /\d{2}\d{2}\d{4}/.test(date);
            this.cacheBlock[date] = testValue;
            return testValue;
        }
    }
}


class PhoneValidator extends BaseValidator {

    validate(phone) {
        if (this.getCachedValue(phone) !== undefined) {
            return this.cacheBlock[phone]
        } else {
            const testValue = /[+]\d+\s/.test(phone);
            this.cacheBlock[phone] = testValue;
            return testValue;
        }
    }
}


const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();

console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны
