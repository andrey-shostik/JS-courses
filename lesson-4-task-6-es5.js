function BaseValidator() {

}
BaseValidator.prototype.validate = function () {};

function EmailValidator() {
    this.validate = function (string) {
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(string);
    }
}
EmailValidator.prototype = Object.create(BaseValidator.prototype);

function DomainValidator() {
    this.validate = function (string) {
        var regexDomain = /^((([0-9]{1,3}\.){3}[0-9]{1,3})|(([a-zA-Z0-9]+(([\-]?[a-zA-Z0-9]+)*\.)+)*[a-zA-Z]{2,}))$/;
        return regexDomain.test(string);
    }
}
DomainValidator.prototype = Object.create(BaseValidator.prototype);

function DateValidator() {
    this.validate = function (string) {
        var regexDate= /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/;
        return regexDate.test(string);
    }
}
DateValidator.prototype = Object.create(BaseValidator.prototype);

function PhoneValidator() {
    this.validate = function (string) {
        var regexPhone = /[^0-9+()\s-]/gi;
        return !regexPhone.test(string);
    }
}
PhoneValidator.prototype = Object.create(BaseValidator.prototype);

const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();

console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны