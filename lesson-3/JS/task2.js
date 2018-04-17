// Урок 3 задание 2

/*
* Реализовать функцию которая вернет новый массив на основе этого https://pastebin.com/0xvghaeT,
* элементы которого должны быть объектами и иметь поля id, name 
* и avaragePrice - среднее арифметическое от суммы firstPrice и secondPrice,
* нужно использовать метод map.
*/

let getArrayAveragePrice = arr => {
	let arrayAverage = arr.map(item => {
		let {id, name, firstPrice, secondPrice} = item;
		let averagePrice = (firstPrice + secondPrice) / 2;
		return {id, name, averagePrice};
	});
	
	return arrayAverage;
}

const arrayCars = [
{"id":1,"name":"Sprinter 2500","firstPrice":8172,"secondPrice":9273},
{"id":2,"name":"Touareg","firstPrice":5856,"secondPrice":5130},
{"id":3,"name":"Avenger","firstPrice":8674,"secondPrice":3118},
{"id":4,"name":"Tracer","firstPrice":8406,"secondPrice":2382},
{"id":5,"name":"Durango","firstPrice":2093,"secondPrice":6622},
{"id":6,"name":"968","firstPrice":7735,"secondPrice":3681},
{"id":7,"name":"Golf","firstPrice":9363,"secondPrice":7039},
{"id":8,"name":"Z4","firstPrice":4827,"secondPrice":6776},
{"id":9,"name":"LaCrosse","firstPrice":3169,"secondPrice":5229},
{"id":10,"name":"Insight","firstPrice":9030,"secondPrice":9207}
];

console.log(`\nЗадание 2`);
console.log( getArrayAveragePrice(arrayCars) );