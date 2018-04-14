// Task 1. Pеализовать функцию которая вернет сумму элементов произвольного массива.

var arrayForExamples = [2, 1, 6, -3, 13, -2];


function getSumArr(arr) {

    return arr.reduce(function(sum, current) {
        return sum + current;
    }, 0);

    // var sum = 0;
    // for(var i = 0; i < array.length; i++) {
    //     sum += arr[i];
    // }
    //
    // return sum;
}

console.log(getSumArr(arrayForExamples));

// Task2. Pеализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, сделать двумя способами, через метод sort и через цикл for


function getSortArray(arr) {

    for(var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

console.log(getSortArray(arrayForExamples));


// №2...

function sortArr(arr) {

    function num(a, b) {
        if (a > b)  return 1;
        if (a < b)  return -1;
    }

    return arr.sort(num);
}

console.log(sortArr(arrayForExamples));

// Task 3. Pеализовать функцию которая возвращает массив с уникальными элементами  [1,1,2,3,1,2] = [1,2,3]

var arrInitialData = [1,2,1,2,3,1,2];
var newArrUniqueElements = [];

function getUniqueElements(arr) {

    var set = new Set(arr);
        set.forEach(function (val) {
            newArrUniqueElements.push(val);
        });
       return newArrUniqueElements;


    /*next:
    for(var i = 0; i < arrInitialData.length; i++) {

        var value = arrInitialData[i];

        for (var j = 0; j < arr.length; j++) {
            if(newArrUniqueElements[j] == value) {
                continue next;
            }
        }

        newArrUniqueElements.push(value);
    }
    return newArrUniqueElements;*/
}

console.log(getUniqueElements(arrInitialData));


// Task 4. Pеализовать функцию которая возвращает массив с числами фибоначчи, количество которых зависит от переданного значения при вызове функции

var newArrNumFibonachi = [];

function getArrFibonachi(num) {
    var a = 1,
        b = 1;

    for (var i = 3; i <= num; i++) {
        var c = a + b;
        a = b;
        b = c;
        newArrNumFibonachi.push(b);
    }

    return newArrNumFibonachi;
}

console.log(getArrFibonachi(5));

