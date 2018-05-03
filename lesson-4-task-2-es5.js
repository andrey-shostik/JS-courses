function Worker (name, surname, rate, days){
    this.getName = function(){
        return name
    }
    this.getSurname = function(){
        return surname
    }
    this.getRate = function(){
        return rate
    }
    this.getDays = function(){
        return days
    }
    this.getSalary = function (){
        return rate*days
    }

}
const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31