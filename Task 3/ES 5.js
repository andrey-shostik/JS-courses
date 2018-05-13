function Worker (name, surname, rate, days){

        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;


    this.getName = function(){
        return this._name;
    }
    this.getSurname = function(){
        return this._surname;
    }
    this.getRate = function(){
        return this._rate;
    }

    this. setDays = function(days){
        this._days = days;
    }

    this. getDays = function(){
        return this._days;
    }

    this. setRate = function(rate){
        this._rate = rate;
    }

    this. getSalary = function(){
        return this._days * this._rate;
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