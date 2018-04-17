// Урок 3 задание 4

/*
* Деструктурировать свойства из JSON:
* 
* requestId,
* result.accountNumber,
* result.balance.otb,
* result.cards.ucid,
* result.cards.expireDate
* result.cards.expireDate.year,
* result.overdraftInfo.lastCloseDayOverBalance,
* result.bank.id
*
* Пример:
* const {requestId} = {...};
* const {requestId123} = {...};
*/

const jso = {
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

const {requestId} = jso;
const {result: [ {accountNumber} ] } = jso;
const {result: [ {balance: {otb} } ] } = jso; 
const {result: [ {cards: [ {ucid} ] } ] } = jso;

/*
* Не понял суть задания. поэтому 3 варианта решения.
*
* В первом и втором варианте просто покажет что expireDate массив объектов, 
* но с этим массивом дальше работать нельзя.
*
* В третьем - конкатенация значений year и month.
*/
const {result: [ {cards: [ {expireDate} ] } ] } = jso;
// const {result: [ {cards: [ {expireDate: {...expireDate} } ] } ] } = jso;
// const {result: [ {cards: [ {expireDate: {year, month} } ] } ] } = jso;

const {result: [ {cards: [ {expireDate: {year} } ] } ] } = jso;
const {result: [ {overdraftInfo: {lastCloseDayOverBalance} } ] } = jso;
const {result: [ {bank: {id} } ] } = jso;

console.log(`\nЗадание 4`);

console.log(`requestId = ${requestId}`);
console.log(`result.accountNumber = ${accountNumber}`);
console.log(`result.balance.otb = ${otb}`);
console.log(`result.cards.ucid = ${ucid}`);

console.log(`result.cards.expireDate = ${expireDate}`);
// console.log(`result.cards.expireDate = year: ${year}, month: ${month}`);

console.log(`result.cards.expireDate.year = ${year}`);
console.log(`result.overdraftInfo.lastCloseDayOverBalance = ${lastCloseDayOverBalance}`);
console.log(`result.bank.id = ${id}`);