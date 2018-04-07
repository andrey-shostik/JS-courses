// 1. Реализовать функцию которая вернет сумму элементов произвольного массива:

function arraySum(array) {
    var sum = 0;
    for (var firsfElement = 0; firsfElement < array.length; firsfElement++) {
        sum += array[firsfElement];
    }
    return sum
}
console.log(arraySum([1, 10, 15, 25, 40]));

// 2. Реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, 
// сделать двумя способами, через метод sort и через цикл for:

// a) метод sort:

var sortAscendind = [4, 1, 45, 6, 37, 554, 2];
function sortFunction(firsfElement, secondElement) {
    if (firsfElement > secondElement) return 1;
    if (firsfElement < secondElement) return -1;
    return 0;
}
sortAscendind.sort(sortFunction);
console.log(sortAscendind);

// или

var sortAscendind = [4, 1, 45, 6, 37, 554, 2];
function sortFunction(firsfElement, secondElement) {
    return firsfElement - secondElement;
}
sortAscendind.sort(sortFunction);
console.log(sortAscendind);

// или

var sortAscendind = [4, 1, 45, 6, 37, 554, 2];
sortAscendind.sort(function (firsfElement, secondElement) {
    return firsfElement - secondElement;
});
console.log(sortAscendind);

// b) цикл for:

function sortFunction() {
    var arr = [4, 1, 45, 6, 37, 554, 2];
    for (a = 0; a < arr.length; a++) {
        for (b = 0; b < arr.length; b++) {
            if (arr[a] < arr[b]) {
                var num = arr[a];
                arr[a] = arr[b];
                arr[b] = num;
            }
        }
    }
    return arr
}
console.log(arr);

// 3. Реализовать функцию которая возвращает массив с уникальными элементами // [1,1,2,3,1,2] => [1,2,3]

function uniqueElements(arr) {
    var result = [];
    nextInput:
    for (var firsfElement = 0; firsfElement < arr.length; firsfElement++) {
        var tempElement = arr[firsfElement];
        for (var secondElement = 0; secondElement < result.length; secondElement++) {
            if (result[secondElement] == tempElement) continue nextInput;
        }
        result.push(tempElement);
    }
    return result;
}
console.log(uniqueElements([1, 1, 1, 2, 3, 1, 2, 4, 4, 10]));

// 4. Реализовать функцию которая возвращает массив с числами фибоначчи, 
// количество которых зависит от переданного значения при вызове функции

function fibFunction(quantity) {
    var arrFibonacci = [0, 1];
    for (var firsfElement = 0; firsfElement < quantity; firsfElement++) {
        arrFibonacci[firsfElement + 2] = arrFibonacci[firsfElement] + arrFibonacci[firsfElement + 1];
    }
    return arrFibonacci;
}
console.log(fibFunction(10));

