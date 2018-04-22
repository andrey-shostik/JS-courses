const arr = [1,2,3,4,5];

function getArrayPartSum1(arr) {
    let ArrayPartSum = [];
    let value = 0;
    arr.forEach((i)=> {
        value = value + i;
        ArrayPartSum.push(value)
    });
    return  ArrayPartSum;
}
console.log(` ArrayPartSum ${getArrayPartSum1(arr)}`);

function getArrayPartSum2(arr) {
    const newArr = [];
    const sumElement = arr.reduce(function (previous, current) {
        newArr.push(previous);
        return (previous + current);
    });
    newArr.push(sumElement);
    return newArr;
}
console.log(` ArrayPartSum ${getArrayPartSum2(arr)}`);

const price =[
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

function addAveragePrice(json) {
    return json.map((element) => {
        const { id, name, firstPrice, secondPrice } = element;
        const averagePrice = ((firstPrice + secondPrice) / 2);
        return { id, name, averagePrice };
    });
}
//console.log(`add averagePrice : \n ${JSON.stringify(addAveragePrice(price), null, '\t' )}`);
console.log(addAveragePrice(price));

const newPrice = addAveragePrice(price);

function getSortArrAveragePrice(arr) {
   return arr.filter( ({ averagePrice }) => {
                return averagePrice > 5000;
            }).sort((x, y) => x.averagePrice - y.averagePrice);
}
//console.log(`averagePrice > 5000: \n ${JSON.stringify(getSortArrAveragePrice(newPrice), null, '\t')}`);
console.log(getSortArrAveragePrice(newPrice));

const json = {
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

const {requestId} = json;
const {result:[{accountNumber}]} = json;
const {result:[{balance: {otb}}]} = json;
const {result:[{cards: [{ ucid }]}]} = json;
const {result:[{cards: [{expireDate}]}]} = json;
const {result:[{cards: [{expireDate: {year}}]}]} = json;
const {result:[{overdraftInfo: {lastCloseDayOverBalance}}]} = json;
const {result:[{bank: {id}}]} = json;

console.log(` requestId: ${requestId}
    result.accountNumber:${accountNumber}
    result.balance.otb: ${otb}
    result.cards.ucid: ${ucid}
    result.cards.expireDate: ${JSON.stringify(expireDate)}
    result.cards.expireDate.year: ${year} 
    result.overdraftInfo.lastCloseDayOverBalance: ${lastCloseDayOverBalance}
    result.bank.id: ${id}` );