//task 1
function sum (x) {
    let targetSum = x
    function getNewSum (y) {

        targetSum += y
        return getNewSum
    }
    getNewSum.toString = function () {
        return targetSum
    }
    return getNewSum
}
alert(sum(1)(2)(10))
//task 2
function sum (x) {
    let targetSum = x
    function getNewSum (y) {
        if (y)
        targetSum += y
        return getNewSum
    }
    getNewSum.toString = function () {
        return targetSum
    }
    return getNewSum
}
alert(sum(1)(2)(7)())

//task 3
const makeCounter = () => {
    let currentCount = 1
    const counter  = () => { return currentCount++ }
    counter.set = (getValue) => { currentCount = getValue }
    counter.reset = () => { currentCount = 1}
    return counter;
}
const counter = makeCounter()
console.log(counter())
