// задание 1: Реализовать функцию которая возвращает массив его частичных сумм c помощью reduce // [1,2,3,4,5] => [1, 3, 6, 10, 15]

const specifiedNumbersArray = [3,12,4,1,156,42,17];

let getPartialSumArray = array => {
  let result = [];
    if (!array.length) return result;

  let totalSum = array.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });
  
  result.push(totalSum);
  return result;
};
console.log( getPartialSumArray(specifiedNumbersArray) );

/* задание 2: Реализовать функцию которая вернет новый массив на основе этого https://pastebin.com/0xvghaeT, элементы
   которого должны быть объектами и иметь поля id, name и avaragePrice - среднее арифметическое от суммы
   firstPrice и secondPrice, нужно использовать метод map. */

const infoCarsArray = [
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

let getAveragePrice = array => {
  let averagePriceArray = array.map(itemField => {
    let {id, name, firstPrice, secondPrice} = itemField;
    let averagePrice = (firstPrice + secondPrice)/2;
    return {id, name, averagePrice};
  });
	
  return averagePriceArray;
};

const averagePriceArray = getAveragePrice(infoCarsArray);
console.log(infoCarsArray);
console.log(averagePriceArray);


/* задание 3: Реализовать функцию которая вернет массив с элементами в которых avaragePrice > 5000, элементы массива 
   должны быть отсортированны по полю avaragePrice, по возростанию. Массив брать из вызова функции задания 2, 
   нужно использовать методы filter и sort. */




/* задание 4: 
   Деструктурировать свойства из JSON:
   requestId,
   result.accountNumber,
   result.balance.otb,
   result.cards.ucid,
   result.cards.expireDate,
   result.cards.expireDate.year,
   result.overdraftInfo.lastCloseDayOverBalance,
   result.bank.id */
