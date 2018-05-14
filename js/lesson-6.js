// Task 1

function sum1(value) {
    return secondValue => thirdValue => value + secondValue + thirdValue;
}

// Task 2.1

function sum2_1(value) {
    return nextValue => nextValue ? sum2_1(value + nextValue) : value;
}

// Task 2.2

function sum2_2(value) {
    const totalSum = nextValue => sum2_2(value + nextValue);

    totalSum.toString = () => value;

    return totalSum;
}

// Task 3

function makeCounter() {
    let initialValue = 0;

    const counter = () => ++initialValue;

    counter.set = (value) => {
        initialValue = --value;
    };

    counter.reset = () => {
        initialValue = 0;
    };

    return counter;
}

const counter = makeCounter();

/*-----------------------------------*/

console.group('Task 1');
    console.log(sum1(1)(2)(3) === 6);
console.groupEnd('Task 1');

console.group('Task 2.1');
    console.log(sum2_1(1)(2)(3)(4)() === 10);
console.groupEnd('Task 2.1');

console.group('Task 2.2');
    alert(sum2_2(1)(2)(3)(4)(5)); // 15
console.groupEnd('Task 2.2');

console.group('Task 3');
    console.log(counter()); // 1
    console.log(counter()); // 2
    console.log(counter.set(12));
    console.log(counter()); // 12
    console.log(counter.reset());
    console.log(counter()); // 1);
console.groupEnd('Task 3');