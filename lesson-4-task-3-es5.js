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
    this.setDays = function (valueDays){
        return days = valueDays;
    }
    this.setRate = function (valueRate){
        return rate = valueRate;
    }

}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10