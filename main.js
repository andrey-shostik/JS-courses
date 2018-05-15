//...................................................1
function getSumArguments(firstArg) {
    let resultSum = firstArg;

    function getSum(nextArg) {
        resultSum += nextArg;
        return getSum;
    }

    getSum.toString = function () {
        return resultSum;
    };

    return getSum;
}

alert(getSumArguments(1)(2)(3)(4));
//...................................................2
function getSumArgumentsFunc(firstArg) {
    let resultSum = firstArg;

    return function getSum(nextArg) {
        if (nextArg) {
            resultSum += nextArg;
            return getSum;
        }

        return resultSum;
    }
}

console.log(getSumArgumentsFunc(1)(2)(3)());
//...................................................2.1
function getSumArg(firstArg) {
    let resultSum = firstArg;

    function getSum(nextArg) {
        if (nextArg) {
            resultSum += nextArg;
            return getSum;
        }
        return resultSum;
    }

    getSum.toString = function () {
        return resultSum;
    };

    return getSum;
}

alert(getSumArg(1)(2)(3));
//...................................................3
function makeCounter() {
    let count = 1;

    function incrementValue() {
        return count++;
    }

    incrementValue.set = function (value) {
        count = value !== undefined ? value : count;
    };

    incrementValue.reset = function () {
        return count = 1;
    };

    return incrementValue;
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
counter.set(12);
console.log(counter()); // 12
counter.reset();
console.log(counter()); // 1