// Task 1. Pеализовать функцию которая вернет сумму элементов произвольного массива.

var arr = [2,3,6,12,13];

function getSumArr() {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(getSumArr());

// Task2. Pеализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, сделать двумя способами, через метод sort и через цикл for

var arr = [3, 1, 3, 34, 12, -2];

function getSortArr() {

    for(var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {

            if (arr[j] > arr[j + 1]) {

                var sort = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = sort;

            }

        }
    }
    return arr;
}

console.log(getSortArr());


// №2...

function sortArr() {
    function Num(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    }

    return arr.sort(Num);
}

console.log(sortArr());

// Task 3. Pеализовать функцию которая возвращает массив с уникальными элементами  [1,1,2,3,1,2] = [1,2,3]

var arr = [1,2,1,2,3,1,2];
var newArr = [];

function sortMyArr() {

    next:
    for(var i = 0; i < arr.length; i++) {

        var value = arr[i];

        for (var j = 0; j < arr.length; j++) {
            if(newArr[j] == value) {
                continue next;
            }
        }

        newArr.push(value);
    }
    return newArr;
}

console.log(sortMyArr());


// Task 4. Pеализовать функцию которая возвращает массив с числами фибоначчи, количество которых зависит от переданного значения при вызове функции
var newArr = [];

function getArrFibonachi(num) {
    var a = 1,
        b = 1;

    for (var i = 3; i <= num; i++) {
        var c = a + b;
        a = b;
        b = c;
        newArr.push(b);
    }

    return newArr;
}

console.log(getArrFibonachi(5));


