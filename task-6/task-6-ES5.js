function BaseValidator() {
    this.cashData = []
    this.getCachedValue = function () {
        return this.cashData[this.cashData.length - 1]
    }
}

BaseValidator.prototype.validate = function () {}

function EmailValidator() {
    BaseValidator.call(this)
}

EmailValidator.prototype = Object.create(BaseValidator.prototype)

EmailValidator.prototype.validate = function(email) {
    const resultOfValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (resultOfValidation){
        this.cashData.push(email)
        return 'It`s OK'
    }else {
        return 'Sorry, but u failed'
    }
}

function DomainValidator() {
    BaseValidator.call(this)
}

DomainValidator.prototype = Object.create(BaseValidator.prototype)

DomainValidator.prototype.validate = function(domain) {
    const resultOfValidation = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain)
    if (resultOfValidation){
        this.cashData.push(domain)
        return 'It`s OK'
    }else {
        return 'Sorry, but u failed'
    }
}

function DateValidator() {
    BaseValidator.call(this)
}

DateValidator.prototype = Object.create(BaseValidator.prototype)

DateValidator.prototype.validate = function (date) {
    const resultOfValidation = /^\d{2}([./-])\d{2}\1\d{4}$/.test(date)
    if (resultOfValidation){
        this.cashData.push(date)
        return 'It`s OK'
    }else {
        return 'Sorry, but u failed'
    }
}

function PhoneValidator() {
    BaseValidator.call(this)
}

PhoneValidator.prototype = Object.create(BaseValidator.prototype)

PhoneValidator.prototype.validate = function (phone) {
    const resultOfValidation = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phone)
    if (resultOfValidation){
        this.cashData.push(phone)
        return 'It`s OK'
    }else {
        return 'Sorry, but u failed'
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