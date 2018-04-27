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

function BaseValidatorEs5() {
    this.tempCash = {};

    this.getCachedValue = function (value) {
        if (this.tempCash[value] !== undefined) {
            return this.tempCash[value]
        }
    }
}

BaseValidatorEs5.prototype.validate = function () {
};

EmailValidatorEs5.prototype = new BaseValidatorEs5();

function EmailValidatorEs5() {
    this.validate = function(email) {
        var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

        if (this.getCachedValue(email) !== undefined) {
            return this.tempCash[email]
        } else {
            const result = regEx.test(email);
            this.tempCash[email] = result;
            return result;
        }
    }
}

DomainValidatorEs5.prototype = new BaseValidatorEs5();

function DomainValidatorEs5() {
    this.validate = function(domain) {
        var regEx = /^\w+([\.]net)$/;

        if (this.getCachedValue(domain) !== undefined) {
            return this.tempCash[domain]
        } else {
            const result = regEx.test(domain);
            this.tempCash[domain] = result;
            return result;
        }
    }
}

DateValidatorEs5.prototype = new BaseValidatorEs5();

function DateValidatorEs5() {
    this.validate = function(date) {
        var regEx = /^\d{2}([\.])\d{2}([\.])\d{4}$/;

        if (this.getCachedValue(date) !== undefined) {
            return this.tempCash[date]
        } else {
            const result = regEx.test(date);
            this.tempCash[date] = result;
            return result;
        }
    }
}

PhoneValidatorEs5.prototype = new BaseValidatorEs5();

function PhoneValidatorEs5() {
    this.validate = function(phone) {
        var regEx = /^(\+375)(\(\d{2}\)\d{3}(\-)\d{2}(\-)\d{2})$/;

        if (this.getCachedValue(phone) !== undefined) {
            return this.tempCash[phone]
        } else {
            const result = regEx.test(phone);
            this.tempCash[phone] = result;
            return result;
        }
    }
}

const emailValidatorEs5 = new EmailValidatorEs5();
const domainValidatorEs5 = new DomainValidatorEs5();
const dateValidatorEs5 = new DateValidatorEs5();
const phoneValidatorEs5 = new PhoneValidatorEs5();
//
console.log(phoneValidatorEs5.validate('phphtml@mail.ru'));
console.log(phoneValidatorEs5.validate('phphtml.net'));
console.log(phoneValidatorEs5.validate('12.05.2020'));
console.log(phoneValidatorEs5.validate('+375(29)817-68-92')); //тут можете формат своей страны

