console.log("/////////////////////////////////////////// 6 ///////////////////////////////////////////////");

// 6. Реализуйте класс BaseValidator, который будет иметь один публичный метод в прототипе validate.
// Также нужно реализовать классы EmailValidator, DomainValidator, DateValidator, PhoneValidator,
// которые будут наследоваться от BaseValidator и определять метод validate каждый по-своему.
// Дополнительное задание: в классах(не в прототипах) EmailValidator, DomainValidator, DateValidator,
// PhoneValidator реализовать кэширование. Непосредственно в классе(не в прототипе) BaseValidator
// реализовать метод getCachedValue, который будет брать закэшированное значение из нужного класса и
// возвращать его вместо вычеслений.

// const emailValidator = new EmailValidator();
// const domainValidator = new DomainValidator();
// const dateValidator = new DateValidator();
// const phoneValidator = new PhoneValidator();
//
// console.log(emailValidator.validate('phphtml@mail.ru'));
// console.log(domainValidator.validate('phphtml.net'));
// console.log(dateValidator.validate('12.05.2020'));
// console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны
// PS. Реализовать на ES5 функциях-конструкторах и на ES6 class. Т.е создаем под одну задачу два фала,
// например validator-es6.js, validator-es5.js

class BaseValidator {

    constructor() {
        this.tempCash = {};
    }

    getCachedValue(value) {
        if (this.tempCash[value] !== undefined) {
            return this.tempCash[value]
        }
    }
}

BaseValidator.prototype.validate = function () {

};

class EmailValidator extends BaseValidator {
    validate(email) {
        let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

        if (this.getCachedValue(email) !== undefined) {
            return this.tempCash[email]
        } else {
            const result = regEx.test(email);
            this.tempCash[email] = result;
            return result;
        }
    }
}

class DomainValidator extends BaseValidator {
    validate(domain) {
        let regEx = /^\w+([\.]net)$/;

        if (this.getCachedValue(domain) !== undefined) {
            return this.tempCash[domain]
        } else {
            const result = regEx.test(domain);
            this.tempCash[domain] = result;
            return result;
        }
    }
}

class DateValidator extends BaseValidator {
    validate(date) {
        let regEx = /^\d{2}([\.])\d{2}([\.])\d{4}$/;

        if (this.getCachedValue(date) !== undefined) {
            return this.tempCash[date]
        } else {
            const result = regEx.test(date);
            this.tempCash[date] = result;
            return result;
        }
    }
}

class PhoneValidator extends BaseValidator {
    validate(phone) {
        let regEx = /^(\+375)(\(\d{2}\)\d{3}(\-)\d{2}(\-)\d{2})$/;

        if (this.getCachedValue(phone) !== undefined) {
            return this.tempCash[phone]
        } else {
            const result = regEx.test(phone);
            this.tempCash[phone] = result;
            return result;
        }
    }
}

const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();
//
console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375(29)817-68-92')); //тут можете формат своей страны

