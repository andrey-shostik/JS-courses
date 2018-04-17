// Урок 3 задание 3

/*
* Реализовать функцию которая вернет массив с элементами в которых avaragePrice > 5000,
* элементы массива должны быть отсортированны по полю avaragePrice, по возростанию. 
* Массив брать из вызова функции задания 2.
*/

let getArrayFilteredByPrice = arr => {
	let arrFiltered = arr.filter(item => {	
		return item.averagePrice > 5000;
		});
	
	return arrFiltered.sort(compareNumeric);
}
	
let compareNumeric = (a, b) => {
  return a.averagePrice - b.averagePrice;
}

const arrayCarsAveragePrice = getArrayAveragePrice(arrayCars);

console.log(`\nЗадание 3`);
console.log( getArrayFilteredByPrice(arrayCarsAveragePrice) );