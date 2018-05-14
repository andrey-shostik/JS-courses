//task - 1

/*const sum = x => y => {
    sum.z = x + y;
    console.log(sum.z);
    return sum(sum.z);
};
(sum(1)(2)(3))*/

const getSum = arg1 => arg2 => arg3 => arg1 + arg2 + arg3;
console.log(getSum(1)(2)(3));


function sum(arg) {
    funcSum.currentSumArg = arg;

    function funcSum(nextArg) {
        funcSum.currentSumArg += nextArg;
        return funcSum;
    }

    funcSum.toString = function() {
        return funcSum.currentSumArg.toString();
    };
    return funcSum
}



console.log(+sum(0)(2)(3)(5)(6)(7));


// task 2.1

function add(args) {
    return function sum(nextArg) {
        if (typeof nextArg !== 'undefined') {
            args = args + nextArg;
            return sum
        } else {
            return args;
        }
    };
}

console.log(add(1)(2)(3)());// 6


//task - 3

function makeCounter () {

    const  counter = () => counter.currentCount++;
    counter.currentCount = 1;
    counter.set = (num) => {
        counter.currentCount = num;
        return `update counter`
    };
    counter.reset = () => {
        counter.currentCount = 1;
        return `reset counter`
    };

    return counter;
}


/*
function makeCounter() {
    let currentCount = 1;

    const counter = () => currentCount++;

    counter.set = (num) => {
        currentCount = num;
        return `update counter`
    };
    counter.reset = () => {
        currentCount = 1;
        return `reset counter`
    };
    return counter;
}
*/

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter.set(12));
console.log(counter()); // 12
console.log(counter.reset());
console.log(counter()); // 1






