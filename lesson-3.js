// задание 1: Реализовать функцию которая возвращает массив его частичных сумм c помощью reduce // [1,2,3,4,5] => [1, 3, 6, 10, 15]

const specifiedNumbersArray = [3,12,4,1,156,42,17];

function getPartialSumArray(array) {
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

console.log("Информация из исходного массива:");

for (let {"id": id, "name": name, "firstPrice": firstPrice, "secondPrice": secondPrice} of infoCarsArray) {
	console.log("id: " + id + ', ' + "Name: " + name + ", " + "firstPrice: " + firstPrice + ", " + "secondPrice: " + secondPrice);
}

function getAveragePrice(array) {
	let averagePriceArray = array.map(function(itemField) {
		let {id, name, firstPrice, secondPrice} = itemField;
		let averagePrice = (firstPrice + secondPrice)/2;
		return {id, name, averagePrice};
	});
	return averagePriceArray;
};

const averagePriceArray = getAveragePrice(infoCarsArray);

console.log("Информация из обработанного массива согласно задания №2:");

for (let {"id": id, "name": name, "averagePrice": averagePrice} of averagePriceArray) {
	console.log("id: " + id + ', ' + "Name: " + name + ", " + "averagePrice: " + averagePrice);
}


/* задание 3: Реализовать функцию которая вернет массив с элементами в которых avaragePrice > 5000, элементы массива 
   должны быть отсортированны по полю avaragePrice, по возростанию. Массив брать из вызова функции задания 2, 
   нужно использовать методы filter и sort. */

function getSortAveragePrice(array) {
	let filteredAveragePrice = array.filter(function(item) {
		return item.averagePrice > 5000;
    });
	let sortedAveragePrice = filteredAveragePrice.sort(function(firstValue, secondValue) {
		return firstValue.averagePrice - secondValue.averagePrice;
    });
	return sortedAveragePrice;
};

const sortedAveragePriseArray = getSortAveragePrice(averagePriceArray);

console.log("Информация из отсортированного массива согласно задания №3:");

for (let {"id": id, "name": name, "averagePrice": averagePrice} of sortedAveragePriseArray) {
	console.log("id: " + id + ', ' + "Name: " + name + ", " + "averagePrice: " + averagePrice);
}


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

const jsonDataObject = {
  "requestId" : "eed3fc9d337261ea23f0",
  "result" : [ {
    "accountNumber" : "40802810800000018334",
    "agreementNumber" : "7000351523",
    "type" : 14,
    "status" : "NORM",
    "tariffCode" : "TFLE1.1",
    "createdOn" : "2016-09-14T00:00:00",
    "currency" : "643",
    "mainFlag" : "Y",
    "balance" : {
      "balance" : 0,
      "otb" : 0,
      "authorized" : 0,
      "pendingPayments" : 0,
      "pendingRequisitions" : 0
    },
    "newBalance" : {
      "balance" : 0,
      "otb" : 0,
      "authorized" : 0,
      "pendingPayments" : 0,
      "pendingRequisitions" : 0,
      "techOver" : 0
    },
    "stats" : {
      "debit" : 0,
      "credit" : 0,
      "interest" : 0
    },
    "cards" : [ {
      "number" : "553420******3894",
      "expireDate" : {
        "year" : 2021,
        "month" : 9
      },
      "embossedName" : "DAVID UBILAVA",
      "name" : "DAVID UBILAVA",
      "isActive" : true,
      "ucid" : 1024452429,
      "status" : "BAML",
      "ownedByCurrentUser" : true
    } ],
    "overIsAvailable" : 0,
    "overdraftInfo" : {
      "amount" : 0,
      "clientIsInOver" : 0,
      "lastCloseDayOverBalance" : 0,
      "currentVirtualOverBalance" : 0,
      "fullOverBalance" : 0
    },
    "activationDate" : "2016-09-16T00:00:00",
    "bank" : {
      "id" : 99,
      "name" : "tcs-sme",
      "bic" : "044525974",
      "isExternal" : false
    }
  } ],
  "success" : true
};

console.log(jsonDataObject);

const { requestId } = jsonDataObject;
console.log("requestId: " + requestId);

const { result: [ { accountNumber } ] } = jsonDataObject;
console.log("accountNumber: " + accountNumber);

const { result: [ { balance: { otb } } ] } = jsonDataObject;
console.log("otb: " + otb);

const { result: [ { cards: [ { ucid } ] } ] } = jsonDataObject;
console.log("ucid: " + ucid);

const { result: [ { cards: [ { expireDate: { year } } ] } ] } = jsonDataObject;
console.log("year: " + year);

const { result: [ { cards: [ { expireDate: { month } } ] } ] } = jsonDataObject;
console.log("month: " +  month);

const { result: [ { overdraftInfo: { lastCloseDayOverBalance } } ] } = jsonDataObject;
console.log("lastCloseDayOverBalance: " + lastCloseDayOverBalance);

const { result: [ { bank: { id } } ] } = jsonDataObject;
console.log("id: " + id);
