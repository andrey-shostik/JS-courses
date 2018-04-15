// Реализовать функцию которая вернет сумму элементов произвольного массива
function getSumArr(collection) {
    let sum = 0;
    for (let i = 0; i < collection.length; i++) {
        sum += collection[i];
    }
    return sum;
}