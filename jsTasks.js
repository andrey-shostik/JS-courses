// 1. Реализовать функцию которая вернет сумму элементов произвольного массива:

function getSumArrayElements(array) {
    var sum = 0;
    for (var index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum
}
console.log(getSumArrayElements([1, 10, 15, 25, 40]));

// 2. Реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, 
// сделать двумя способами, через метод sort и через цикл for:

// a) метод sort:

var sortAscendind = [4, 1, 45, 6, 37, 554, 2];
function getSortedArray(firsfElement, secondElement) {
    if (firsfElement > secondElement) return 1;
    if (firsfElement < secondElement) return -1;
    return 0;
}
sortAscendind.sort(getSortedArray);
console.log(sortAscendind);

// или

var sortAscendind = [4, 1, 45, 6, 37, 554, 2];
function getSortedArray(firsfElement, secondElement) {
    return firsfElement - secondElement;
}
sortAscendind.sort(getSortedArray);
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

function getUniqueElements(arr) {
    var obj = {};
    for(var index=0; index<arr.length; index++) {
        var str = arr[index];
        obj[str] = true;
    }
    return Object.keys(obj);
}
var arrValues = [1,1,5,5,4,8,6,5,3,3,5,2,1,4,4];
console.log( getUniqueElements(arrValues) );

// 4. Реализовать функцию которая возвращает массив с числами фибоначчи, 
// количество которых зависит от переданного значения при вызове функции

var arrayLength = 15;
var fibonacci = [0,1];
function getFibonacciValues() {
    for (var i = 1; i < arrayLength; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
    console.log(fibonacci);
}
getFibonacciValues();

