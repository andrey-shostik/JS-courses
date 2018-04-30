/* Задание №6. Реализуйте класс BaseValidator, который будет иметь один публичный метод в прототипе validate. Также нужно реализовать 
классы EmailValidator, DomainValidator, DateValidator, PhoneValidator, которые будут наследоваться от BaseValidator и 
определять метод validate каждый по-своему. Дополнительное задание: в классах(не в прототипах) EmailValidator, DomainValidator, 
DateValidator, PhoneValidator реализовать кэширование. Непосредственно в классе(не в прототипе) BaseValidator реализовать метод 
getCachedValue, который будет брать закэшированное значение из нужного класса и возвращать его вместо вычеслений.
const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();
console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны */

function BaseValidator() {
  this.cash = [];
  this.getCachedValue = function() {
    return this.cash[this.cash.length -1]
  };
};

BaseValidator.prototype.validate = function() {};

function EmailValidator() {
  BaseValidator.call(this);
};

EmailValidator.prototype.constructor = EmailValidator;

EmailValidator.prototype = Object.create(BaseValidator.prototype);

EmailValidator.prototype.validate = function(email) {
  const resultValidator = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(String(email));
  if (resultValidator) {
    this.cash.push(email);
      return 'Email validate'
    } else {
      return `Email not validate`
    }
};

function DomainValidator() {
  BaseValidator.call(this);
};

DomainValidator.prototype.constructor = DomainValidator;

DomainValidator.prototype = Object.create(BaseValidator.prototype);

DomainValidator.prototype.validate = function(domain) {
  const resultValidator = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/.test(String(domain));
  if (resultValidator) {
    this.cash.push(domain);
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
  const resultValidator = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(date);
  if (resultValidator) {
    this.cash.push(date);
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
  const resultValidator = /^[+0-9]{4}\s\([0-9]{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone);
  if (resultValidator) {
    this.cash.push(phone);
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

console.log(emailValidator.validate('wrewer'));
console.log(domainValidator.validate('234243'));
console.log(dateValidator.validate('cdfefwfe'));
console.log(phoneValidator.validate('few5'));