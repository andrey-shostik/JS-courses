
var arr = [1,31,5,4,2,1,5,4,31,10];


//task1

function getArrSum(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}
console.log('Получаем сумму:' + getArrSum(arr));

//task2
//a
function compareArr(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
function getSortArr(arr){

return arr.sort(compareArr);
}

console.log('Сортированный массив:' + getSortArr(arr));

//b

function sortArrFor(arr) {
    const arrSort = arr.slice();

    for (let i = 0; i < arrSort.length - 1; i++) {
        for (let j = 0; j < arrSort.length - 1 - i; j++) {
            if (arrSort[j + 1] < arrSort[j]) {
                const t = arrSort[j + 1];
                arrSort[j + 1] = arrSort[j];
                arrSort[j] = t;
            }
        }
    }

    return arrSort;
}
console.log('Сортированный массив:' + sortArrFor(arr));

//3 ещё думаю
function getUniqueNumber(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }

    return Object.keys(obj);
}

console.log('Уникальные элементы в массиве:' + getUniqueNumber(arr));



//4

