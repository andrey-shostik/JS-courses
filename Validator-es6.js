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

class Validator {

    isEmail(email) {

        let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

        return regEx.test(email)

    }

    isDomain(domain) {

        let regEx = /^\w+([\.]net)$/;

        return regEx.test(domain)
    }

    isDate(date) {

        let regEx = /^\d{2}([\.])\d{2}([\.])\d{4}$/;

        return regEx.test(date)
    }

    isPhone(phone) {

        let regEx = /^(\+375)(\(\d{2}\)\d{3}(\-)\d{2}(\-)\d{2})$/;

        return regEx.test(phone)
    }
}

let validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375(29)817-68-92')); //тут можете формат своей страны

