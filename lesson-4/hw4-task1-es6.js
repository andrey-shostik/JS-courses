class FirstWorkerES6 {
    constructor(name, surname, rate, days){
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
    this.getSalary =  () => {return this._rate * this._days};
    }
}

const secondIvan = new FirstWorkerES6('Ivan', 'Ivanov', 10, 31);

console.log("Task1 ES6:");
console.log(secondIvan._name);
console.log(secondIvan._surname);
console.log(secondIvan._rate);
console.log(secondIvan._days);
console.log(secondIvan.getSalary());
console.log("");