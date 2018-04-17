// Задача 1

const arry = [1, 2, 3, 4, 5];

function getSums(arr) {
    let result = [];
    if (!arr.length) return result;

    let totalSum = arr.reduce(function (sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}
console.log( getSums(arry) );

