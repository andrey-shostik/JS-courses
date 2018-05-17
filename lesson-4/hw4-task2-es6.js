class SecondWorkerES6 {
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
}

const fourthIvan = new SecondWorkerES6('Ivan', 'Ivanov', 10, 31);

console.log("Task2 ES6:");
console.log(fourthIvan.getName());
console.log(fourthIvan.getSurname());
console.log(fourthIvan.getRate());
console.log(fourthIvan.getDays());
console.log(fourthIvan.getSalary());
console.log("");