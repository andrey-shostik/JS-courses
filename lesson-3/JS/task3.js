// Урок 3 задание 3

/*
* Реализовать функцию которая вернет массив с элементами в которых avaragePrice > 5000,
* элементы массива должны быть отсортированны по полю avaragePrice, по возростанию. 
* Массив брать из вызова функции задания 2.
*/

const getArrayFilteredByPrice = arr => {
    return arr.filter(item => item.averagePrice > 5000).sort(compareNumeric);
}

const compareNumeric = (a, b) => {
    return a.averagePrice - b.averagePrice;
}

const arrayCarsAveragePrice = getArrayAveragePrice(arrayCars);

console.log(`\nЗадание 3`);
console.log( getArrayFilteredByPrice(arrayCarsAveragePrice) );