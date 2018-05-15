//
//
// task #1
function sumArguments(value) {
    return secondValue => nextValue => value + secondValue + nextValue;
}
console.log(sumArguments(1)(2)(3) === 6);
//
//
// task #2.1
function sumArg(value) {
    return nextValue => nextValue ? sumArg(value + nextValue) : value;
}
console.log(sumArg(1)(2)(3)(4)(5)() === 15);
//
//
// task #2.2
function secondSumArg(value) {
    const totalSum = nextValue => secondSumArg(value + nextValue);
    totalSum.toString = () => value;
    return totalSum;
}
alert(secondSumArg(1)(2)(3)(4)(5)(6));
//
//
// task #3
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
console.log(counter()); // 1
console.log(counter()); // 2
counter.set(12);
console.log(counter()); // 12
counter.reset();
console.log(counter()); // 1