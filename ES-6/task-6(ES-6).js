class BaseValidator {
    constructor() {
        this.cacheBlock = [];
    }

    getCachedValue() {
        return this.cacheBlock[this.cacheBlock.length - 1];
    }
}

BaseValidator.prototype.validate = function () {};

class EmailValidator extends BaseValidator {
    validate(email) {
        const testValue = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(email);

        if (testValue) {
            this.cacheBlock.push(email);
            console.log(this.cacheBlock);
            return this.getCachedValue();
        }
        return `Не валідний емейл - ${email}`;
    }
}

class DomainValidator extends BaseValidator {
    validate(domain) {
        const testValue = /\w+\.\w+/.test(domain);

        if (testValue) {
            this.cacheBlock.push(domain);
            console.log(this.cacheBlock);
            return this.getCachedValue();
        }
        return `Не валідний домейн - ${domain}`;
    }
}

class DateValidator extends BaseValidator {
    validate(date) {
        const testValue = /\d{2}\d{2}\d{4}/.test(date);

        if (testValue) {
            this.cacheBlock.push(date);
            return this.getCachedValue();
        }
        return `Не валіднa дата - ${date}`;
    }
}

class PhoneValidator extends BaseValidator {

    validate(phone) {
        const testValue = /[+]\d+\s/.test(phone);

        if (testValue) {
            this.cacheBlock.push(phone);
            return this.getCachedValue();
        }
        return `Не валідний телефон - ${phone}`;
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