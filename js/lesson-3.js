// Массивы
const arrOfCondition= [1,2,3,4,5];

// ЗАДАЧИ **********************************

// 1
// Реализовать функцию которая возвращает массив его частичных сумм // [1,2,3,4,5] => [1, 3, 6, 10, 15]

function getPartialSumArray(arr) {
    const result = [];
    if (!arr.length) return result;

    let totalSum = arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}

// 2
// Реализовать функцию которая вернет новый массив на основе этого https://pastebin.com/0xvghaeT, элементы которого
// должны быть объектами и иметь поля id, name и averagePrice - среднее арифметическое от суммы firstPrice и secondPrice.

function formAnArrayOfObjects (arr, minValueAveragePrice) {

}

// 3
// Реализовать функцию которая вернет массив с элементами в которых averagePrice > 5000, элементы массива должны быть
// отсортированны по полю averagePrice, по возростанию. Массив брать из вызова функции задания 2.

function getFilteredArrayByAveragePrice (arr, minValueAveragePrice) {

}



// 4
// Деструктурировать свойства из JSON:

function destructProperties() {

}

// *********************************

console.group('Вызовы:');

console.group('Задача №1:');
console.log(getPartialSumArray(arrOfCondition));
console.groupEnd('Задача №1:');

console.group('Задача №2:');
console.log(formAnArrayOfObjects(arr));
console.groupEnd('Задача №2:');

console.group('Задача №3:');
console.log(getFilteredArrayByAveragePrice(arr, 5000));
console.groupEnd('Задача №3:');

console.group('Задача №4:');
console.log(destructProperties());
console.groupEnd('Задача №4:');

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