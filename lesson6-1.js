//1
function sum(number) {
    let tempSum = number;

    function add(number) {
        tempSum += number;
        return add;
    }
    add.toString = function () {
        return tempSum;
    };
    return add;
}


alert(sum(1)(2)(9));

