/*
Задание 1

// Реализовать функцию которая возвращает массив его частичных сумм
// [1,2,3,4,5] => [1, 3, 6, 10, 15]
*/

let getPartialSumArray = arr => {
    let result = [];

    let sum = arr.reduce((prev, curr) => {
        result.push(prev + curr);
        return prev + curr;
    }, 0);

    return result;
}

const arrayOfNum = [1, 2, 3, 4, 5];

console.log( getPartialSumArray(arrayOfNum) );


/*
Задание 2

Реализовать функцию которая вернет новый массив на основе этого https://pastebin.com/0xvghaeT,
элементы которого должны быть объектами и иметь поля id, name и
avaragePrice - среднее арифметическое от суммы firstPrice и secondPrice.
*/

let getArrAvaragePrice = arr => {
    let arrayAverage = arr.map(item => {
        let {id, name, firstPrice, secondPrice} = item;
        let averagePrice = (firstPrice + secondPrice) / 2;
        return {id, name, averagePrice};
    });

    return arrayAverage;
}

const dataPriceCar = [
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

console.log( getArrAvaragePrice(dataPriceCar) );


/*
Задание 3

Реализовать функцию которая вернет массив с элементами в которых avaragePrice > 5000,
элементы массива должны быть отсортированны по полю avaragePrice, по возростанию.
Массив брать из вызова функции задания 2.
*/

function getArraySortedAveragePrice(arr) {
    let resultSortedArray = [];

    resultSortedArray = arr.filter(function ({averagePrice}) {
        return averagePrice > 5000;
    }).sort(sortArrayByIncrement);

    return resultSortedArray;
}

function sortArrayByIncrement(a, b) {
    return a.averagePrice - b.averagePrice;
}

const arrayCarAverPrice = getArrAvaragePrice(dataPriceCar);

console.log(getArraySortedAveragePrice(arrayCarAverPrice));


/*
Задание 4

Деструктурировать свойства из JSON:

requestId,
result.accountNumber,
result.balance.otb,
result.cards.ucid,
result.cards.expireDate
result.cards.expireDate.year,
result.overdraftInfo.lastCloseDayOverBalance,
result.bank.id
Пример:

const {requestId} = {...};
const {requestId123} = {...};
*/

let information = {
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
}

const {requestId} = information;
const {result: [ {accountNumber} ] } = information;
const {result: [ {balance: {otb} } ] } = information;
const {result: [ {cards: [ {ucid} ] } ] } = information;
const {result: [ {cards: [ {expireDate} ] } ] } = information;
const {result: [ {cards: [ {expireDate: {year} } ] } ] }  = information;
const {result:[ {overdraftInfo: {lastCloseDayOverBalance} } ] } = information;
const {result: [ {bank: {id} } ] } = information;

console.log(requestId, accountNumber, otb, ucid, expireDate, year, lastCloseDayOverBalance, id);