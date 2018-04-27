console.log("/////////////////////////////////////////// 5 ///////////////////////////////////////////////");

// 5. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail
// параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
// Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие
// методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки
// телефона:

// var validator = new Validator();
//
// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

function ValidatorEs5() {
    this.isEmail = function(email) {

        var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

        return regEx.test(email)
    };

    this.isDomain = function(domain) {

        var regEx = /^\w+([\.]net)$/;

        return regEx.test(domain)
    };

    this.isDate = function(date) {

        var regEx = /^\d{2}([\.])\d{2}([\.])\d{4}$/;

        return regEx.test(date)
    };

    this.isPhone = function(phone) {

        var regEx = /^(\+375)(\(\d{2}\)\d{3}(\-)\d{2}(\-)\d{2})$/;

        return regEx.test(phone)
    }


}

var validatorEs5 = new ValidatorEs5();

console.log(validatorEs5.isEmail('phphtml@mail.ru'));
console.log(validatorEs5.isDomain('phphtml.net'));
console.log(validatorEs5.isDate('12.05.2020'));
console.log(validatorEs5.isPhone('+375(29)817-68-92')); //тут можете формат своей страны

