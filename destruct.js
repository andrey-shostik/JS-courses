const jsonObject = {
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

let {requestId} = jsonObject;
let {result: [{accountNumber, balance: {otb}}]} = jsonObject;
let {result: [{cards: [{ucid}]}]} = jsonObject;
let {result: [{cards: [{expireDate}]}]} = jsonObject;
let {result: [{cards: [{expireDate: {year}}]}]} = jsonObject;
let {result: [{overdraftInfo: {lastCloseDayOverBalance}}]} = jsonObject;
let {result: [{bank: {id}}]} = jsonObject;

console.log('requestId = ' + requestId);
console.log('result.accountNumber = ' + accountNumber);
console.log('result.balance.otb = ' + otb);
console.log('result.cards.ucid = ' + ucid);
console.log(expireDate);
console.log('result.cards.expireDate.year = ' + year);
console.log('result.overdraftInfo.lastCloseDayOverBalance = ' + lastCloseDayOverBalance);
console.log('result.bank.id = ' + id);