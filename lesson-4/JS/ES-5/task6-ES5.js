/*
* Реализуйте класс BaseValidator, который будет иметь один публичный метод в прототипе validate.
* Также нужно реализовать классы EmailValidator, DomainValidator, DateValidator, PhoneValidator,
* которые будут наследоваться от BaseValidator и определять метод validate каждый по-своему.
*
* Дополнительное задание:
* в классах(не в прототипах) EmailValidator, DomainValidator, DateValidator, PhoneValidator
* реализовать кэширование.
* Непосредственно в классе(не в прототипе) BaseValidator реализовать метод getCachedValue,
* который будет брать закэшированное значение из нужного класса и возвращать его вместо вычеслений.
*
* const emailValidator = new EmailValidator();
* const domainValidator = new DomainValidator();
* const dateValidator = new DateValidator();
* const phoneValidator = new PhoneValidator();
*
* console.log(emailValidator.validate('phphtml@mail.ru'));
* console.log(domainValidator.validate('phphtml.net'));
* console.log(dateValidator.validate('12.05.2020'));
*console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны
*/

function BaseValidator() {
  this.cache = [];

  this.getCachedValue = function() {
    return this.cache[this.cache.length -1]
    };
};

BaseValidator.prototype.validate = function() {};

function EmailValidator() {
  BaseValidator.call(this);
};

EmailValidator.prototype.constructor = EmailValidator;

EmailValidator.prototype = Object.create(BaseValidator.prototype);

EmailValidator.prototype.validate = function(email) {
  const resultValidator = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(String(email));

  if (resultValidator) {
    this.cache.push(email);
    return 'Email validate'
    } else {
        return 'Email not validate'
    }
};

function DomainValidator() {
  BaseValidator.call(this);
};

DomainValidator.prototype.constructor = DomainValidator;

DomainValidator.prototype = Object.create(BaseValidator.prototype);

DomainValidator.prototype.validate = function(domain) {
  const resultValidator = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(String(domain));

  if (resultValidator) {
    this.cache.push(domain);
    return 'Domain validate'
    } else {
        return 'Domain not validate'
  }
};

function DateValidator() {
  BaseValidator.call(this);
};

DateValidator.prototype.constructor = DateValidator;

DateValidator.prototype = Object.create(BaseValidator.prototype);

DateValidator.prototype.validate = function(date) {
  const resultValidator = /^\d\d\.\d\d\.\d{4}$/.test(date);

  if (resultValidator) {
    this.cache.push(date);
    return 'Date validate'
    } else {
        return 'Date not validate'
    }
};

function PhoneValidator() {
  BaseValidator.call(this);
};

PhoneValidator.prototype.constructor = PhoneValidator;

PhoneValidator.prototype = Object.create(BaseValidator.prototype);

PhoneValidator.prototype.validate = function(phone) {
  const resultValidator = /^[0-9+\(\)#\.\s\/ext-]+$/.test(phone);

  if (resultValidator) {
  this.cache.push(phone);
  return 'Phone validate'
    } else {
        return 'Phone not validate'
    }
};

const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();

console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+380 (67) 123-45-67'));