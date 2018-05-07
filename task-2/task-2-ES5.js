function Worker(name, surname, rate, days) {
    const _name = name
    const _surname = surname
    const _rate = rate
    const _days = days

    this.getName = function () {
        return _name
    }

    this.getSurname = function () {
        return _surname
    }

    this.getRate = function () {
        return _rate
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