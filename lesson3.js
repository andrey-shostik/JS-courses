///////////////// #1 \\\\\\\\\\\\\\\\

const array = [ 1, 2, 3, 4, 5 ];

function getSums(arr) {
  return arr.map(function(item, index, arr) {
    return arr.slice(0, index + 1)
      .reduce(function(previous, current){
        return previous + current;
    })
  })
}
console.log(getSums(array));
///////////////// #2 \\\\\\\\\\\\\\\\

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

function getArrayWithAvaragePrices(array){
  return array.map(function (options) {
    const {id,name,firstPrice,secondPrice} = options;
    const avaragePrice = (firstPrice + secondPrice) / 2;
    return {
      id,
      name,
      avaragePrice
    };
  })
}

const arrayWithAvaragePrices = getArrayWithAvaragePrices(infoCarsArray);
console.log(getArrayWithAvaragePrices(infoCarsArray));

///////////////// #3 \\\\\\\\\\\\\\\\

function getFilteredArray(arr) {
    return arr.filter(({avaragePrice}) => avaragePrice > 5000)
        .sort((a,b) => a.avaragePrice - b.avaragePrice);
}

console.log(getFilteredArray(arrayWithAvaragePrices));
///////////////// #4 \\\\\\\\\\\\\\\\

let informationAboutUser = {
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


const {requestId} = informationAboutUser;
const {result: [ {accountNumber} ] } = informationAboutUser;
const {result: [ {balance: {otb} } ] } = informationAboutUser;
const {result: [ {cards: [ {ucid} ] } ] } = informationAboutUser;
const {result: [ {cards: [ {expireDate} ] } ] } = informationAboutUser;
const {result: [ {cards: [ {expireDate: {year} } ] } ] }  = informationAboutUser;
const {result:[ {overdraftInfo: {lastCloseDayOverBalance} } ] } = informationAboutUser;
const {result: [ {bank: {id} } ] } = informationAboutUser;

console.log(requestId, accountNumber, otb, ucid, expireDate, year, lastCloseDayOverBalance, id);
