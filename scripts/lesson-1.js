//1. реализовать функцию которая вернет сумму элементов произвольного массива

function getArraySum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total
}

console.log(getArraySum([3, 1, 2, 5, 4, 1, 2, 0, -1]));

//2. реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, сделать двумя способами, через метод sort и через цикл for

function getfirstSortArr(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

console.log(getfirstSortArr([10, 15, 64, 9]));

function getSecondSortArr(arr) {
    var arrLenght = arr.length;
    for (var i = 0; i < (arrLenght + 1) ; i++) {
        for (var j = 0; j < arrLenght; j++) {
            if (arr[i] > arr[j + 1]) {
                continue
            } else {
                var temp = arr[i];
                arr[i] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    function n(value) {
        return value !== undefined;
    }
    arr = arr.filter(n);
    return arr;
}

console.log(getSecondSortArr([3, 1, 2, 5, 4, 1, 2, 0, -1]));

// 3. реализовать функцию которая возвращает массив с уникальными элементами // [1,1,2,3,1,2] => [1,2,3]

function getUnicArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[i] === arr[i + j]) {
                delete arr[i + j];
            }
        }
    }
    
    function n(value) {
        return value !== undefined;
    }
    arr = arr.filter(n);
    return arr;
}

console.log(getUnicArr([2,1,1]));

// 4. реализовать функцию которая возвращает массив с числами фибоначчи, количество которых зависит от переданного значения при вызове функции

function getArrFibonachi(quantity) {
    var fibArr = [0, 1];
    for (var i = 0; i < quantity; i++) {
        fibArr[i + 2] = fibArr[i] + fibArr[i + 1];
    }
    return fibArr;
}

console.log(getArrFibonachi(6));






