/* Задание 2: реализовать функцию которая принимает произвольный массив и
возвращает отсортированный по возростанию,
сделать двумя способами, через метод sort и через цикл for
*/

const unSortArr = [1, 1, 2, 3, 1, 2];

// Задание 2 способ 1, через метод sort

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

function getSortArray(unSortArr) {
    return unSortArr.sort(compareNumeric);
}

console.log('Sorted array using sort: ' + getSortArray(unSortArr));


// Задание 2 способ 2, через цикл for

function getSortArrayFor(unSortArr) {
    let n = unSortArr.length - 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (unSortArr[j + 1] < unSortArr[j]) {
                let temp = unSortArr[j + 1];
                unSortArr[j + 1] = unSortArr[j];
                unSortArr[j] = temp;
            }
        }
    }
    return unSortArr;
}

console.log('Sorted array using for: ' + getSortArrayFor(unSortArr));