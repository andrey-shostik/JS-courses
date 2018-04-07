/*JS задачи
реализовать функцию которая вернет сумму элементов произвольного массива
реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, сделать двумя способами, через метод sort и через цикл for
    реализовать функцию которая возвращает массив с уникальными элементами // [1,1,2,3,1,2] => [1,2,3]
реализовать функцию которая возвращает массив с числами фибоначчи, количество которых зависит от переданного значения при вызове функции
*/
//task1
var myArray = [1, 2, 2, 4, 'j', 5];

function getSum() {
    var sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (typeof(myArray[i]) === "number") {
            sum = sum + myArray[i];
        } else
            console.log('Not all elements of array are numeric');
    }
    return sum;
}
console.log(getSum());

//task2
var myArrayTask2 = [1, 9, 7, 20, 5, 14];

myArrayTask2.sort(fn);
function fn(a, b) {
    return a - b;
}

console.log(myArrayTask2.join('/'));

function sortArrayElements() {
    //var myArrayTask2 = [1, 9, 7, 20, 5, 14];
    var tmp = '';
    for (var i = 0; i < myArrayTask2.length - 1; i++) {
        for (var j = 0; j < myArrayTask2.length - 1; j++) {
            if (myArrayTask2[j] > myArrayTask2[j + 1]) {
                tmp = myArrayTask2[j];
                myArrayTask2[j] = myArrayTask2[j + 1];
                myArrayTask2[j + 1] = tmp;
            }
        }
    }
    return myArrayTask2.join('*');
}

//task3

var myArrayTask3 = [1, 1, 2, 3, 1, 2, 7, 8, 8, 6, 7, 3, 8];

function uniqArray() {
    var obj = {};
    for (var i = 0; i < myArrayTask3.length; i++) {
        var rawItems = myArrayTask3[i];
        obj[rawItems] = true;
    }
    return Object.keys(obj);
}
console.log(uniqArray());

//task4
function numbersFibonaci(n) {
    var n = prompt('input n');
    var fibArray = [1, 1];
    for (var i = 2; i <= n-1; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
}
console.log(numbersFibonaci());
