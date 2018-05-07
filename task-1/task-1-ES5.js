function Worker(name, surname, rate, days){
    this.name = name
    this.surname = surname
    this.rate = rate
    this.days = days
}
    Worker.prototype.getSalary = function () {
       return this.rate * this.days
    }
let worker = new Worker('lol', 'kek', 10, 31)

console.log(worker.name)
console.log(worker.surname)
console.log(worker.rate)
console.log(worker.days)
console.log(worker.getSalary())