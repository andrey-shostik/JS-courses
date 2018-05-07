// task1
var inputArray = [1, 2, 3, 4, 5]
function getArraySums(array) {
    var outputArray = []
    var sums = array.reduce(function (sum, item) {
        outputArray.push(sum)
        return sum + item
    });
    outputArray.push(sums)
    return outputArray
}
console.log(getArraySums(inputArray))
//task2
var jsonArray = [
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
function getAvarage(array) {
    var newArray = array.map(function (item) {
        item.avaragePrice = (item.firstPrice  + item.secondPrice)/2
        delete item.firstPrice
        delete item.secondPrice
        return item
    })
    return newArray
}
//task3
function getFilteredAvarage() {
    var newAvarage = getAvarage(jsonArray);
    console.log(newAvarage)
    var sortedArray = (newAvarage.filter(item => item.avaragePrice > 5000 ))
    function compareAvarage(avarageA, avarageB){
        return avarageA.avaragePrice - avarageB.avaragePrice
    }
    sortedArray.sort(compareAvarage)
    console.log(sortedArray)
}
getFilteredAvarage()
//task 4
var jsonObject = {
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
const {requestId} = jsonObject
const {result: [{accountNumber}]} = jsonObject
const {result: [{balance: {otb}}]} = jsonObject
const {result: [{cards: [{ucid}]}]} = jsonObject
const {result: [{cards: [{expireDate}]}]} = jsonObject
const {result: [{cards: [{expireDate: {year}}]}]} = jsonObject
const {result: [{overdraftInfo: {lastCloseDayOverBalance}}]} = jsonObject
const {result: [{bank: {id}}]} = jsonObject
console.log(requestId, accountNumber, otb, ucid, expireDate, year, lastCloseDayOverBalance, id)