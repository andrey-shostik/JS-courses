// 6. Реализуйте класс BaseValidator, который будет иметь один публичный метод в прототипе validate.
// Также нужно реализовать классы EmailValidator, DomainValidator, DateValidator, PhoneValidator,
// которые будут наследоваться от BaseValidator и определять метод validate каждый по-своему.

// Дополнительное задание: в классах(не в прототипах) EmailValidator, DomainValidator, DateValidator, PhoneValidator
// реализовать кэширование. Непосредственно в классе(не в прототипе) BaseValidator реализовать метод getCachedValue,
// который будет брать закэшированное значение из нужного класса и возвращать его вместо вычеслений.

class BaseValidator {
    validate(str) {
        if(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(str)){

        }
        // super.isDomain();
        // super.isDate();
        // super.isPhone();
            }
}

class EmailValidator extends BaseValidator {
    validate(str) {
        return super.validate(str);

    }
}

const emailValidator = new EmailValidator();
// const domainValidator = new DomainValidator();
// const dateValidator = new DateValidator();
// const phoneValidator = new PhoneValidator();

console.group('6');
console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны
console.group('6');
//PS. Реализовать на ES5 функциях-конструкторах и на ES6 class.
// Т.е создаем под одну задачу два фала, например validator-es6.js, validator-es5.js