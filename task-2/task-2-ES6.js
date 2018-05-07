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

    getRate(){
        return this._rate
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