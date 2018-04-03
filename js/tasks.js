// Массивы
const arr = [1, 3, 24, 5, 6, 34, 5, 4, "нежданчик", true, undefined];
const notUnicArr = [1, 1, 2, 3, 1, 2];

// ЗАДАЧИ **********************************

// 1
// реализовать функцию которая вернет сумму элементов произвольного массива

function getSum(arr) {
    let sum = 0;

    console.group('Не числа');

    for (let i = 0; i < arr.length; i++) {
        if (isNumeric(arr[i])) {
            sum += arr[i];
        } else {
            console.log(arr[i] + ' - не попадет в сумму');
        }
    }

    console.groupEnd('Не числа');

    return sum;
}

// 2
// реализовать функцию которая принимает произвольный массив и возвращает
// отсортированный по возростанию, сделать двумя способами, через метод sort и через цикл for

// *** через метод sort
function getSort(arr) {

    return arr.sort(compareNumeric);
}

// *** через цикл for
function getSortFor(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                let t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t;
            }
        }
    }

    return arr;
}

// 3
// реализовать функцию которая возвращает массив
// с уникальными элементами // [1,1,2,3,1,2] => [1,2,3]


function getUnicArr(notUnicArr) {
    let obj = {};
    let unicArr = [];

    for (let i = 0; i < notUnicArr.length; i++) {
        let str = notUnicArr[i];
        obj[str] = notUnicArr[i];
    }

    for (var key in obj) {
        unicArr.push(obj[key]);
    }

    return unicArr;
}


// 4
// реализовать функцию которая возвращает массив с числами фибоначчи,
// количество которых зависит от переданного значения при вызове функции

function fibonacciArr(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.slice(0, n);
}

// *********************************

console.group('Вызовы:');

console.group('Задача №1:');
console.log('Сумма:' + getSum(arr));
console.groupEnd('Задача №1:');

console.group('Задача №2:');
console.log('Сортировка через Метод sort:', getSort(arr));
console.log('Сортировка через Цикл for:', getSortFor(arr));
console.groupEnd('Задача №2:');

console.group('Задача №3:');
console.log('Массив с уникальными элементами:', getUnicArr(notUnicArr));
console.groupEnd('Задача №3:');

console.group('Задача №4:');
console.log('Фибоначчи:', fibonacciArr(12));
console.groupEnd('Задача №4:');

console.groupEnd('Вызовы:');

// *********************************

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}