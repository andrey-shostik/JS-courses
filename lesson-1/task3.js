// Задание 3: реализовать функцию которая возвращает массив с уникальными элементами
// [1,1,2,3,1,2] => [1,2,3]

const notUniqArr = [1, 1, 2, 3, 1, 2];

function uniqueValues(notUniqArr) {
    let obj = {};

    for (let i = 0; i < notUniqArr.length; i++) {
        let temp = notUniqArr[i];
        obj[temp] = true;
    }

    let uniqArr = [];

    for (let key in obj) {
        uniqArr.push(key);
    }

    return uniqArr;
}

console.log('Unique array values: ' + uniqueValues(notUniqArr));