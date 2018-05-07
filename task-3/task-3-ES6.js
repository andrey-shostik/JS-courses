class Worker {
    constructor(name, surname, rate, days){
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
    }

    getName(){
        return this._name
    }

    getSurname(){
        return this._surname
    }
    setRate(newRate){
        this._rate = newRate
    }
    getRate(){
        return this._rate
    }
    setDays(newDays){
        this._days = newDays
    }
    getDays(){
        return this._days
    }

    getSalary(){
        return this._rate * this._days
    }
}
let worker = new Worker('lol', 'kek', 10, 20)
console.log(worker.getName())
console.log(worker.getSurname())
console.log(worker.getRate())
console.log(worker.getDays())
console.log(worker.getSalary())

worker.setRate(15)
worker.setDays(25)
console.log(worker.getSalary())