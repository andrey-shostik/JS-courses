//1. реализовать функцию которая вернет сумму элементов произвольного массива

var arr = [3, 1, 2, 5, 4, 1, 2, 0, -1];
var lenghtArr = arr.length;
var total = 0;
var fibArr = [0, 1];

function sum(arr) {
    for (var i = 0; i < lenghtArr; i++) {
        total += arr[i];
    }
    return total
}

console.log(sum(arr));

//2. реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, сделать двумя способами, через метод sort и через цикл for

function firstSort(arr) {
    return arr.sort();
}

console.log(firstSort(arr));

function secondSort(arr) {
    for (var i = 0; i < lenghtArr +1 ; i++) {
        for (var j = 0; j < lenghtArr; j++) {
            if (arr[i] > arr[j + 1]) {
            } else {
                var temp = arr[i];
                arr[i] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(secondSort(arr));

// 3. реализовать функцию которая возвращает массив с уникальными элементами // [1,1,2,3,1,2] => [1,2,3]

function unicArr(arr) {
    for (var i = 0; i < lenghtArr; i++) {
        for (var j = 1; j < lenghtArr; j++) {
            if (arr[i] === arr[i + j]) {
                delete arr[i];
                delete arr[i + j];
            }
        }
    }
    
    function n(value) {
        return value != undefined;
    }
    arr = arr.filter(n);
    return arr;
}

console.log(unicArr(arr));

// 4. реализовать функцию которая возвращает массив с числами фибоначчи, количество которых зависит от переданного значения при вызове функции

function fibonachi(quantity) {
    for (var i = 0; i < quantity; i++) {
        fibArr[i + 2] = fibArr[i] + fibArr[i + 1];
    }
    return fibArr;
}

console.log(fibonachi(6));
