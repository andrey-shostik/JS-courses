
/* Task-6.Реализуйте класс BaseValidator, который будет иметь один публичный метод в прототипе validate. Также нужно реализовать классы EmailValidator, DomainValidator, DateValidator, PhoneValidator, которые будут наследоваться от BaseValidator и определять метод validate каждый по-своему. Дополнительное задание: в классах(не в прототипах) EmailValidator, DomainValidator, DateValidator, PhoneValidator реализовать кэширование. Непосредственно в классе(не в прототипе) BaseValidator реализовать метод getCachedValue, который будет брать закэшированное значение из нужного класса и возвращать его вместо вычеслений.*/

function BaseValidator() {
    this.cacheBlock = {};

    this.getCachedValue = function (val) {
        return this.cacheBlock[val];
    };
}

BaseValidator.prototype.validate = function () {

};



function EmailValidator() {
    BaseValidator.apply(this);
}

EmailValidator.prototype = Object.create(BaseValidator.prototype);
EmailValidator.prototype.constructor = EmailValidator;

EmailValidator.prototype.validate = function(email) {
    if (this.getCachedValue(email) !== undefined) {
        return this.cacheBlock[email]
    } else {
        const testValue = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(email);
        this.cacheBlock[email] = testValue;
        return testValue;
    }
};



function DomainValidator() {
    BaseValidator.apply(this);
}

DomainValidator.prototype = Object.create(BaseValidator.prototype);
DomainValidator.prototype.constructor = DomainValidator;

DomainValidator.prototype.validate = function(domain) {
    if (this.getCachedValue(domain) !== undefined) {
        return this.cacheBlock[domain]
    } else {
        const testValue = /\w+\.\w+/.test(domain);
        this.cacheBlock[domain] = testValue;
        return testValue;
    }
};



function DateValidator() {
    BaseValidator.apply(this);
}

DateValidator.prototype = Object.create(BaseValidator.prototype);
DateValidator.prototype.constructor = DateValidator;

DateValidator.prototype.validate = function(date) {
    if (this.getCachedValue(date) !== undefined) {
        return this.cacheBlock[date]
    } else {
        const testValue = /\d{2}\d{2}\d{4}/.test(date);
        this.cacheBlock[date] = testValue;
        return testValue;
    }
};



function PhoneValidator() {
    BaseValidator.apply(this);
}

PhoneValidator.prototype = Object.create(BaseValidator.prototype);
PhoneValidator.prototype.constructor = PhoneValidator;

BaseValidator.prototype.validate = function(phone) {
    if (this.getCachedValue(phone) !== undefined) {
        return this.cacheBlock[phone]
    } else {
        const testValue = /[+]\d+\s/.test(phone);
        this.cacheBlock[phone] = testValue;
        return testValue;
    }
};


const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();

console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны