function Worker(name, surname, rate, days) {
    const _name = name
    const _surname = surname
    let _rate = rate
    let _days = days

    this.getName = function () {
        return _name
    }

    this.getSurname = function () {
        return _surname
    }
    this.setRate = function (newRate) {
         _rate = newRate
    }
    this.getRate = function () {
        return _rate
    }
    this.setDays = function (newDays) {
        _days = newDays
    }
    this.getDays = function () {
        return _days
    }

    this.getSalary = function () {
        return _rate * _days
    }
}
let worker = new Worker('lol', 'kek', 10, 20)
console.log(worker.getName())
console.log(worker.getSurname())
console.log(worker.getRate())
console.log(worker.getDays())
console.log(worker.getSalary())

worker.setRate(20)
worker.setDays(15)
console.log(worker.getSalary())