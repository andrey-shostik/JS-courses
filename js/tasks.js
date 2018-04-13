// Массивы
const randomArr = [1, 3, 24, 5, 6, 34, 5, 4, "нежданчик", true, undefined];
const arrayWithNonUniqueValues = [1, 1, 2, 3, 1, 2];

// ЗАДАЧИ **********************************

// 1
// реализовать функцию которая вернет сумму элементов произвольного массива

function getSum(arr) {
    let sum = 0;
    const numericArr = addNumericArr(arr);

    for (let i = 0; i < numericArr.length; i++) {
        sum += numericArr[i];
    }

    return sum;
}

// 2
// реализовать функцию которая принимает произвольный массив и возвращает
// отсортированный по возростанию, сделать двумя способами, через метод sort и через цикл for

// *** через метод sort
function sortAscending(arr) {

    return arr.sort(compareNumeric);
}

// *** через цикл for
function sortAscendingMethodFor(arr) {
    const sortedArray = arr.slice();

    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            if (sortedArray[j + 1] < sortedArray[j]) {
                const t = sortedArray[j + 1];
                sortedArray[j + 1] = sortedArray[j];
                sortedArray[j] = t;
            }
        }
    }

    return sortedArray;
}

// 3
// реализовать функцию которая возвращает массив
// с уникальными элементами // [1,1,2,3,1,2] => [1,2,3]

function getArrWithUniqueValues(arr) {
    const objWithUniqueValues = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        objWithUniqueValues[value] = arr[i];
    }

    for (let key in objWithUniqueValues) {
        result.push(objWithUniqueValues[key]);
    }

    return result;
}

// 3 *
// реализовать функцию которая возвращает массив
// с уникальными элементами // [1,1,2,3,1,2] => [1,2,3] используя Set

function getArrWithUniqueValuesSet(arr) {
    const uniqueValues = new Set(arr);
    const result = [];

    for (let key of uniqueValues) {
        result.push(key);
    }

    return result;
}


// 4
// реализовать функцию которая возвращает массив с числами фибоначчи,
// количество которых зависит от переданного значения при вызове функции

function fibonacciArr(n) {
    const fib = [0, 1];

    if (n < fib.length) {
        fib.length = n;
    } else {
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
    }

    return fib.slice(0, n);
}

// *********************************

console.group('Вызовы:');

console.group('Задача №1:');
console.log('Сумма:' + getSum(randomArr));
console.groupEnd('Задача №1:');

console.group('Задача №2:');
console.log('Сортировка через Метод sort:', sortAscending(randomArr));
console.log('Сортировка через Цикл for:', sortAscendingMethodFor(randomArr));
console.groupEnd('Задача №2:');

console.group('Задача №3:');
console.log('Массив с уникальными элементами:', getArrWithUniqueValues(arrayWithNonUniqueValues));
console.groupEnd('Задача №3:');

console.group('Задача №3*:');
console.log('через SET:', getArrWithUniqueValuesSet(arrayWithNonUniqueValues));
console.groupEnd('Задача №3*:');

console.group('Задача №4:');
console.log('Фибоначчи:', fibonacciArr(12));
console.groupEnd('Задача №4:');

console.group('*');
console.log('*', addNumericArr(randomArr));
console.groupEnd('*');

console.groupEnd('Вызовы:');

// *********************************

// * возвращаем массив только с числами
function addNumericArr(arr) {
    const numericArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (isNumeric(arr[i])) {
            numericArr.push(arr[i]);
        }
    }

    return numericArr;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}