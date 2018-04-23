// context
const myFunc = function () {
    const arrowFunc = () => {
        console.log(this);
    };
    arrowFunc.call({});
};

const user = {
    sayHi     : myFunc,
    sayHiArrow: () => console.log(this);
};
//

// проверка контекст вызова 
user.sayHiArrow();
user.sayHi();
//

// потеря контекста
var sayHello = user.sayHi;
sayHello();
//

// контекст при вызове функции конструктора через оператор new
function User () {
    // this = {}

    // return this
}

new User;
//

// методы для вызова функции с переданным контекстом call, apply
sayHi.call('123')
sayHi.apply('123', [1,2,3,4,5]);
//


// пример замыкания
window[ a ] = 0;

const add = function (x) {
    var a = 1;

    function b() {
        // a1
        let a = '123';
        var q = function () {
            // a
        };
    }
};
//

/// каунтер через замыкание
var counter = function () {
    var value = 0;

    return function () {
        return ++value;
    };
};

var myCounter = counter();
myCounter();
myCounter();
myCounter();
//

// частичное применение ФП
function addNumbers(a, b) {
    return a + b;
}

const add2 = addNumbers.bind(null, 2);
add2(3);
//

// каррирование ФП
const sumCurry = a => b => c => a + b + c;

const sumFromCurry = sumCurry(1)(3)(2); // 6

const sum = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};
//

sumCurry2(3);

// решение задачи a == 1 && a == 2 && a == 3;
a = {
    counter: 0,
    valueOf: function () {
        return ++this.counter;
    },
};
//

