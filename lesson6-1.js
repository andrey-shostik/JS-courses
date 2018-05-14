//1
function sum(a) {
    let tempSum = a;

    function add(b) {
        tempSum += b;
        return add;
    }
    add.toString = function () {
        return tempSum;
    };
    return add;
}


alert(sum(1)(2)(9));

