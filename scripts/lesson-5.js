console.log('/////////////////////////////////////1//////////////////////////////////////////');
// 1. Реализовать функцию, которая суммирует аргументы.
// function sum(x) {
// ...
// }
//
// sum(1)(2)(3) === 6

function sum(x) {

    let totalSum = x;

    function f(b) {
        totalSum += b;
        return f;
    }

    f.toString = function () {
        return totalSum;
    };

    return f;
}

console.log(sum(1)(2)(3));

console.log('/////////////////////////////////////2//////////////////////////////////////////');
// 2. Реализовать функцию, которая суммирует аргументы, если аргумент не передан -
// вернуть сумму.
// function sum(x) {
// ...
// }
//
// sum(1)(2)(3)...(N)() === сумме всех чисел до N

function sum2(x) {

    let totalSum = x;

    function f(b) {
        if (b === undefined) {
            return totalSum;
        }
        else {
            totalSum += b;
        }
        return f;
    }

    // f.toString = function() {
    //     return totalSum;
    // };

    return f;
}

console.log(sum2(1)(2)(3)());

console.log('/////////////////////////////////////2.1//////////////////////////////////////////');

function sum3(x) {

    let totalSum = x;

    function f(b) {
        if (b === undefined) {
            return totalSum;
        }
        else {
            totalSum += b;
        }
        return f;
    }

    f.toString = function () {
        return totalSum;
    };

    return f;
}

console.log(sum3(1)(2)(3));

console.log('/////////////////////////////////////3//////////////////////////////////////////');

// 3. Реализовать счетчик который при вызове должен возвращать число на 1 больше,
// также иметь методы set и reset, работать это должно следующим образом.
// const counter = makeCounter();
// counter() // 1
// counter() // 2
// counter.set(12);
// counter() // 12
// counter.reset();
// counter() // 1

function makeCounter() {
    let counter = 0;

    const f = function () {
        return ++counter;
    };

    f.set = function (x) {
        counter = x;
        return counter
    };

    f.reset = function () {
        counter = 0;
        return counter
    };

    return f

}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter.set(12));
console.log(counter()); // 12
console.log(counter.reset());
console.log(counter()); // 1

// console.log('/////////////////////////////////////3//////////////////////////////////////////');
//
//
// function makeCounter2() {
//     let counter = 0;
//
//     return function () {
//
//         this.set = function (x) {
//             counter = x;
//             return counter
//         };
//
//         this.reset = function () {
//             counter = 0;
//             return counter
//         };
//         return ++counter;
//     }
//
// }
//
// const counter2 = makeCounter2();
//
// console.log(counter2());
// // console.log(counter2.set(2));