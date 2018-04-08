// Задание 3: реализовать функцию которая возвращает массив с уникальными элементами
// [1,1,2,3,1,2] => [1,2,3]

const unSortArr = [1, 1, 2, 3, 1, 2];

function uniqueValues(unSortArr) {
    let obj = {};

    for (let i = 0; i < unSortArr.length; i++) {
        let temp = unSortArr[i];
        obj[temp] = true;
    }

    let uniqArr = [];

    for (let key in obj) {
        uniqArr.push(obj[key]);
    }

    return uniqArr;
}

console.log('Unique array values: ' + uniqueValues(unSortArr));