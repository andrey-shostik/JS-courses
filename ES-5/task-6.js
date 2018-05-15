/* Task-6.Реализуйте класс BaseValidator, который будет иметь один публичный метод в прототипе validate. Также нужно реализовать классы EmailValidator, DomainValidator, DateValidator, PhoneValidator, которые будут наследоваться от BaseValidator и определять метод validate каждый по-своему. Дополнительное задание: в классах(не в прототипах) EmailValidator, DomainValidator, DateValidator, PhoneValidator реализовать кэширование. Непосредственно в классе(не в прототипе) BaseValidator реализовать метод getCachedValue, который будет брать закэшированное значение из нужного класса и возвращать его вместо вычеслений.*/

function BaseValidator() {
    this.cacheBlock = [];

    this.getCachedValue = function () {
        return this.cacheBlock[this.cacheBlock.length - 1];
    };
}

BaseValidator.prototype.validate = function () {};

function EmailValidator() {
    BaseValidator.apply(this);
}

EmailValidator.prototype = Object.create(BaseValidator.prototype);
EmailValidator.prototype.constructor = EmailValidator;

EmailValidator.prototype.validate = function(email) {
    const testValue = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(email);

    if (testValue) {
        this.cacheBlock.push(email);
        console.log(this.cacheBlock);
        return this.getCachedValue();
    }
    return `Не валідний емейл - ${email}`;
};

function DomainValidator() {
    BaseValidator.apply(this);
}

DomainValidator.prototype = Object.create(BaseValidator.prototype);
DomainValidator.prototype.constructor = DomainValidator;

DomainValidator.prototype.validate = function(domain) {
    const testValue = /\w+\.\w+/.test(domain);

    if (testValue) {
        this.cacheBlock.push(domain);
        return this.getCachedValue();
    }
    return `Не валідний домен - ${domain}`;
};

function DateValidator() {
    BaseValidator.apply(this);
}

DateValidator.prototype = Object.create(BaseValidator.prototype);
DateValidator.prototype.constructor = DateValidator;

DateValidator.prototype.validate = function(date) {
    const testValue = /\d{2}\d{2}\d{4}/.test(date);

    if (testValue) {
        this.cacheBlock.push(date);
        return this.getCachedValue();
    }
    return `Не валіднa дата - ${date}`;
};

function PhoneValidator() {
    BaseValidator.apply(this);
}

PhoneValidator.prototype = Object.create(BaseValidator.prototype);
PhoneValidator.prototype.constructor = PhoneValidator;

BaseValidator.prototype.validate = function(phone) {
    const testValue = /[+]\d+\s/.test(phone);

    if (testValue) {
        this.cacheBlock.push(phone);
        return this.getCachedValue();
    }
    return `Не валідний телефон - ${phone}`;
};

const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();

console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(emailValidator.validate('pddsgvagasml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375 (29) 817-68-92'));