// реализовать функцию которая вернет сумму элементов произвольного массива

var arr = [1, 10, 15, 25, 40];
function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
console.log(arraySum(arr));

// реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, 
// сделать двумя способами, через метод sort и через цикл for

// a) метод sort:

function sortFunction(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}
var arr = [ 4, 1, 45, 6, 37, 554, 2 ];
arr.sort(sortFunction);
console.log(arr);

// или

function sortFunction(a, b) {
    return a - b;
}
var arr = [ 4, 1, 45, 6, 37, 554, 2 ];
arr.sort(sortFunction);
console.log(arr);

// или

var arr = [4, 1, 45, 6, 37, 554, 2];
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);

// b) цикл for:

function sortFunction(arr) {
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
}

console.log(arr);

// реализовать функцию которая возвращает массив с уникальными элементами // [1,1,2,3,1,2] => [1,2,3]

var arr = [ 1, 1, 1, 2, 3, 1, 2, 4, 4, 10 ];
function uniqueVal(value, index, self) { 
    return self.indexOf(value) === index;
}
console.log( arr.filter( uniqueVal) );

// реализовать функцию которая возвращает массив с числами фибоначчи, 
// количество которых зависит от переданного значения при вызове функции

var arrFibonacci = [0, 1];
function fibonacci(quantity) {
    for (var i = 0; i < quantity; i++) {
        arrFibonacci[i + 2] = arrFibonacci[i] + arrFibonacci[i + 1];
    }
    return arrFibonacci;
}
console.log(fibonacci(10));
