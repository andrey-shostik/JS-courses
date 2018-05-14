//task - 1

/*const sum = x => y => {
    sum.z = x + y;
    console.log(sum.z);
    return sum(sum.z);
};
(sum(1)(2)(3))*/

const getSum = x => y => z => x + y + z;
console.log(getSum(1)(2)(3));


function sum(a) {
    f.currentSum = a;

    function f(b) {
        f.currentSum += b;
        return f;
    }

    f.toString = function() {
        return f.currentSum.toString();
    };
    return f
}

console.log(+sum(0)(2)(3)(5)(6)(7));


// task 2.1

function add(x) {
    return function sum(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return sum
        } else {
            return x;
        }
    };
}

console.log(add(1)(2)(3)());// logs 6


//task - 3

function makeCounter () {

    const  counter = () => {
        return counter.currentCount++;
    };
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






