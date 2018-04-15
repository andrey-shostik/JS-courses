/*
* реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию,
* сделать двумя способами, через метод sort и через цикл for
*/


// через метод sort
function compareArr(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
}

arr.sort(compareArr);


// через цикл for
function sortArrFor(arr) {
    for (var i = 0; i < arr.length - 1; i++) {

        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var sort = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = sort;
            }
        }
    }
    return arr;
}