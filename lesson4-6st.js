//1
class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate*this.days;
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

//2-3
class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getRate(rate){
        if (!arguments.length) {
            return this.rate;
        } else {return this.rate = rate}
    }

    getDays(days){
        if (!arguments.length) {
            return this.days;
        } else {return this.days = days}
    }

    getSalary() {
        return this.rate * this.days;
    }
}
const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());

//4

class MyString {
    constructor(str) {
        this.str = str;
    }
        reverse(str) {
            return str.split("").reverse().join("");
        }

        ucFirst(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        ucWord(str) {
            return str.replace(/\b\w/g, str.charAt(0).toUpperCase())
        }
}
const myString = new MyString();
console.log(myString.reverse('abcde'));
console.log(myString.ucFirst('abcde'));
console.log(myString.ucWord('abcde abcde abcde'));

//5
class Validator {
    constructor(str) {
        this.str = str;
    }
    isEmail(checkstring) {
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
        if (emailPattern.test(checkstring)) {
            return ('This email is true');
        } else {return ('This is not email')}
    }

    isDomain(chekstring) {
        const domainPattern = /^([0-9a-z]([0-9a-z\-])*[0-9a-z]\.)+[0-9a-z\-]{1,8}$/i;
        if (domainPattern.exec(chekstring)) {
            return true;
        } else {return false}
    }

    isDate(checkstring) {
        const datePattern = /^[0-9]{2}[\.]{1}[0-9]{2}[\.]{1}[0-9]{4}$/i;
        if (datePattern.test(checkstring)) {
            return ('Valid date');
        } else {return false}
    }

    isPhoneNum(checkstring) {
        const phonePattern = /^\+380\s*(\([0-9]{2}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
        if (phonePattern.test(checkstring)) {
            return true;
        } else {return false}
    }
}
const validator = new Validator();
console.log(validator.isEmail('my@ukr.ck.net'));
console.log(validator.isDomain('ck.ua'));
console.log(validator.isDate('22.01.2005'));
console.log(validator.isPhoneNum('+380 (93) 333-44-44'));
