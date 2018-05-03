class BaseValidator {

}
BaseValidator.prototype.validate =  () => {};

class EmailValidator {
    validate (email) {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(email);
    }
}
EmailValidator.prototype = Object.create(BaseValidator.prototype);
class DomainValidator {
    validate (domain) {
        const regexDomain = /^((([0-9]{1,3}\.){3}[0-9]{1,3})|(([a-zA-Z0-9]+(([\-]?[a-zA-Z0-9]+)*\.)+)*[a-zA-Z]{2,}))$/;
        return regexDomain.test(domain);
    }
}
DomainValidator.prototype = Object.create(BaseValidator.prototype);

class DateValidator {
    validate (date) {
        const regexDate= /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/;
        return regexDate.test(date);
    }
}
DateValidator.prototype = Object.create(BaseValidator.prototype);


class PhoneValidator {
    validate (phone) {
        const regexPhone = /[^0-9+()\s-]/gi;
        return !regexPhone.test(phone);
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
console.log(phoneValidator.validate('+380 (29) 817-68-92')); //тут можете формат своей страны