//task 1-2
function sum (x) {
    let targetSum = x
    function getNewSum (y) {
        if (y == undefined) {
            return getNewSum
        }
        targetSum += y
        return getNewSum
    }
    getNewSum.toString = function () {
        return targetSum
    }
    return getNewSum
}
alert(sum(1)(2)(10)())