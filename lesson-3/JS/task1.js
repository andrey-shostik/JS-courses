// Урок 3 задание 1

/*
* Реализовать функцию которая возвращает массив его частичных сумм c помощью reduce 
* [1,2,3,4,5] => [1, 3, 6, 10, 15]
*/

let getArrayOfPartialSums = arr => {
let result = [];

let sum = arr.reduce((total, amount) => {
	result.push(total + amount);
	return total + amount;
}, 0);

return result;
}

const array = [1, 2, 3, 4, 5];

console.log(`Задание 1`);
console.log( getArrayOfPartialSums(array) );