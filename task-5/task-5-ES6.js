class Validator {
    isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    isDomian(domain) {
        return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain)
    }
    isDate(date) {
        return /^\d{2}([./-])\d{2}\1\d{4}$/.test(date)
    }
    isPhone(phone) {
        return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phone)
    }
}
const validator = new Validator()
console.log(validator.isEmail('kek@lol.com'))
console.log(validator.isDomian('lolkek.com'))
console.log(validator.isDate('05.05.2005'))
console.log(validator.isPhone('1234567890'))