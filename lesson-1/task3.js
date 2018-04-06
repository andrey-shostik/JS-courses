// Задание 3: реализовать функцию которая возвращает массив с уникальными элементами
// [1,1,2,3,1,2] => [1,2,3]

const unSortArr = [1, 1, 2, 3, 1, 2];

function uniqueValues(unSortArr) {
    let obj = {};

    for (let i = 0; i < unSortArr.length; i++) {
        let temp = unSortArr[i];
        obj[temp] = true;
    }

    return Object.keys(obj);
}

console.log('Unique array values: ' + uniqueValues(unSortArr));