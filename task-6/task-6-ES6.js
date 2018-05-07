class BaseValidator {
    constructor(){
    this.cashData = []
}
    getCachedValue(){
        return (this.cashData[this.cashData.length - 1])
    }
}

BaseValidator.prototype.validate = function () {}

class EmailValidator extends BaseValidator{
    validate(email){
        const resultOfValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        if (resultOfValidation){
            this.cashData.push(email)
            return 'It`s OK'
        }else {
            return 'Sorry, but u failed'
        }
    }
}

class DomainValidator extends BaseValidator{
    validate(domain){
        const resultOfValidation = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain)
        if (resultOfValidation){
            this.cashData.push(domain)
            return 'It`s OK'
        }else {
            return 'Sorry, but u failed'
        }
    }
}

class DateValidator extends BaseValidator{
    validate(date){
        const resultOfValidation = /^\d{2}([./-])\d{2}\1\d{4}$/.test(date)
        if (resultOfValidation){
            this.cashData.push(date)
            return 'It`s OK'
        }else {
            return 'Sorry, but u failed'
        }
    }
}

class PhoneValidator extends BaseValidator{
    validate(phone){
        const resultOfValidation = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phone)
        if (resultOfValidation){
            this.cashData.push(phone)
            return 'It`s OK'
        }else {
            return 'Sorry, but u failed'
        }
    }
}
const emailValidator = new EmailValidator()
const domainValidator = new DomainValidator()
const dateValidator = new DateValidator()
const phoneValidator = new PhoneValidator()

console.log(emailValidator.validate('phphtml@mail.ru'))
console.log(domainValidator.validate('phphtml.net'))
console.log(dateValidator.validate('12.05.2020'))
console.log(phoneValidator.validate('(123)4567890'))