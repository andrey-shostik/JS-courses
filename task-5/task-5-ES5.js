function Validator() {
    this.isEmail = function (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    this.isDomian = function (domain) {
        return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain)
    }
    this.isDate = function (date) {
        return /^\d{2}([./-])\d{2}\1\d{4}$/.test(date)
    }
    this.isPhone = function (phone) {
        return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phone)
    }
}
const validator = new Validator();
console.log(validator.isEmail('kek@lol.com'))
console.log(validator.isDomian('lolkek.com'))
console.log(validator.isDate('05.05.2005'))
console.log(validator.isPhone('1234567890'))