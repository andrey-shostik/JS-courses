class ThirdWorkerES6 {
    constructor(name, surname, rate, days){
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName(){
        return this._name;
    };

    getSurname(){
        return this._surname;
    };

    getRate(){
        return this._rate;
    };

    getDays(){
        return this._days
    };

    getSalary(){
        return this._days * this._rate;
    };

    setRate(newRate){
        return this._rate = newRate;
    };
    setDays(newDays){
        return this._days = newDays;
    }
}

const sixtsIvan = new ThirdWorkerES6('Ivan', 'Ivanov', 10, 31);

sixtsIvan.setRate(20);
sixtsIvan.setDays(10);

console.log("Task3 ES6:");
console.log(sixtsIvan.getName());
console.log(sixtsIvan.getSurname());
console.log(sixtsIvan.getRate());
console.log(sixtsIvan.getDays());
console.log(sixtsIvan.getSalary());
console.log("");