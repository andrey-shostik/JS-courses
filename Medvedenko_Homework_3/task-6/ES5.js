function BaseValidator() {
    this.cash = [];
    this.getCachedValue = function () {
        return this.cash[this.cash.length -1]
   };
}

BaseValidator.prototype.validate = function () {
};

function EmailValidator() {
    BaseValidator.call(this);
}
EmailValidator.prototype = Object.create(BaseValidator.prototype);
EmailValidator.prototype.constructor = EmailValidator;

EmailValidator.prototype.validate = function (email) {
    const resultValidator = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(String(email).toLowerCase());
    if (resultValidator) {
        this.cash.push(email);
        return this.getCachedValue() + ' -validate'
    }else {
        return `Email ${email} is not validate`
    }

};

function DomainValidator() {
    BaseValidator.call(this);
}
DomainValidator.prototype = Object.create(BaseValidator.prototype);
DomainValidator.prototype.constructor = DomainValidator;

DomainValidator.prototype.validate = function (domain) {
    const resultValidator = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/img.test(String(domain).toLowerCase());
    if (resultValidator) {
        this.cash.push(domain);
        return this.getCachedValue() + ' -validate'
    }else {
        return `${domain} is not validate`
    }
};

function DateValidator() {
    BaseValidator.call(this);
}
DateValidator.prototype = Object.create(BaseValidator.prototype);
DateValidator.prototype.constructor = DateValidator;


DateValidator.prototype.validate = function (date) {
    const resultValidator = /(\d{2}\.\d{2}\.\d{4})/.test(date);
    if (resultValidator) {
        this.cash.push(date);
        return this.getCachedValue() + ' -validate'
    }else {
        return `${date} is not validate`
    }
};


function PhoneValidator() {
    BaseValidator.call(this);
}
PhoneValidator.prototype = Object.create(BaseValidator.prototype);
PhoneValidator.prototype.constructor = PhoneValidator;


PhoneValidator.prototype.validate = function (phone) {
    const resultValidator = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone);
    if (resultValidator) {
        this.cash.push(phone);
        return this.getCachedValue() + ' -validate'
    }else {
        return `${phone} is not validate`
    }
};

const phoneValidator = new PhoneValidator();
console.log(phoneValidator.validate('+375 (29) 817-68-92'));

const dateValidator = new DateValidator();
console.log(dateValidator.validate('12.05.2020'));

const domainValidator = new DomainValidator();
console.log(domainValidator.validate('phphtml.net'));
console.log(domainValidator.validate('https://phphtml.net'));

const emailValidator = new EmailValidator();
console.log(emailValidator.validate('phph56789tml@mail.ru'));
