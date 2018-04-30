class Worker {
    constructor (name, surname, rate, days){
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName(){
        return this._name;
    }
    getSurname(){
        return this._surname;
    }
    getRate(){
        return this._rate;
    }

    setDays(days){
        this._days = days;
    }

    getDays(){
        return this._days;
    }

    setRate(rate){
        this._rate = rate;
    }

    getSalary(){
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