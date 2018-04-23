//lesson3 task1
const startArray = [1, 2, 3, 'f', 4, 5];
const resultArray = [];
const numArray = [];

function getNumericArray() {
    for (var i = 0; i < startArray.length; i++) {
        if (typeof(startArray[i]) === "number") {
            numArray.push(startArray[i]);
        }
    }
    return numArray;
}

function getPartialSum() {
    if (numArray.length) {
        let sum = numArray.reduce(function (intermediateSum, currentItem) {
            resultArray.push(intermediateSum);
            return intermediateSum + currentItem;
        })
        resultArray.push(sum);
        return resultArray
    }
    else {
        return resultArray;
    }
};

getNumericArray();

getPartialSum();

console.log(resultArray);

// lesson3 task2

const carPrice = [
    {"id": 1, "name": "Sprinter 2500", "firstPrice": 8172, "secondPrice": 9273},
    {"id": 2, "name": "Touareg", "firstPrice": 5856, "secondPrice": 5130},
    {"id": 3, "name": "Avenger", "firstPrice": 8674, "secondPrice": 3118},
    {"id": 4, "name": "Tracer", "firstPrice": 8406, "secondPrice": 2382},
    {"id": 5, "name": "Durango", "firstPrice": 2093, "secondPrice": 6622},
    {"id": 6, "name": "968", "firstPrice": 7735, "secondPrice": 3681},
    {"id": 7, "name": "Golf", "firstPrice": 9363, "secondPrice": 7039},
    {"id": 8, "name": "Z4", "firstPrice": 4827, "secondPrice": 6776},
    {"id": 9, "name": "LaCrosse", "firstPrice": 3169, "secondPrice": 5229},
    {"id": 10, "name": "Insight", "firstPrice": 9030, "secondPrice": 9207}
]


function getAvaragePrice() {
    let avaragePrice = carPrice.map(function (elem) {
        return {
            id: elem.id,
            name: elem.name,
            avaragePrice: (elem.firstPrice + elem.secondPrice) / 2
        }
    });
    return avaragePrice;
}

console.log(getAvaragePrice());

//sorting
function sortAvaragePrice() {
    let sortArray = getAvaragePrice().filter(function (elem) {
        if (elem.avaragePrice > 5000) {
            return {
                id: elem.id,
                name: elem.name,
                avaragePrice: elem.avaragePrice
            }
        }
    });

    return sortArray;
}

function compareObj(avaragePrice1, avaragePrice2) {
    return avaragePrice1.avaragePrice - avaragePrice2.avaragePrice;
}

console.log(sortAvaragePrice().sort(compareObj));

//destruct
const objJson = {
    "requestId": "eed3fc9d337261ea23f0",
    "result": [{
        "accountNumber": "40802810800000018334",
        "agreementNumber": "7000351523",
        "type": 14,
        "status": "NORM",
        "tariffCode": "TFLE1.1",
        "createdOn": "2016-09-14T00:00:00",
        "currency": "643",
        "mainFlag": "Y",
        "balance": {
            "balance": 0,
            "otb": 0,
            "authorized": 0,
            "pendingPayments": 0,
            "pendingRequisitions": 0
        },
        "newBalance": {
            "balance": 0,
            "otb": 0,
            "authorized": 0,
            "pendingPayments": 0,
            "pendingRequisitions": 0,
            "techOver": 0
        },
        "stats": {
            "debit": 0,
            "credit": 0,
            "interest": 0
        },
        "cards": [{
            "number": "553420******3894",
            "expireDate": {
                "year": 2021,
                "month": 9
            },
            "embossedName": "DAVID UBILAVA",
            "name": "DAVID UBILAVA",
            "isActive": true,
            "ucid": 1024452429,
            "status": "BAML",
            "ownedByCurrentUser": true
        }],
        "overIsAvailable": 0,
        "overdraftInfo": {
            "amount": 0,
            "clientIsInOver": 0,
            "lastCloseDayOverBalance": 0,
            "currentVirtualOverBalance": 0,
            "fullOverBalance": 0
        },
        "activationDate": "2016-09-16T00:00:00",
        "bank": {
            "id": 99,
            "name": "tcs-sme",
            "bic": "044525974",
            "isExternal": false
        }
    }],
    "success": true
}

const {requestId} = objJson;
const {result: [{accountNumber}]} = objJson;
const {result: [{balance: {otb}}]} = objJson;
const {result: [{cards: [{ucid}]}]} = objJson;
const {result: [{cards: [{expireDate}]}]} = objJson;
const {result: [{cards: [{expireDate: {year}}]}]} = objJson;
const {result: [{overdraftInfo: {lastCloseDayOverBalance}}]} = objJson;
const {result: [{bank: {id}}]} = objJson;

console.log(requestId);
console.log(accountNumber);
console.log(otb);
console.log(ucid);
console.log(expireDate);
console.log(year);
console.log(lastCloseDayOverBalance);
console.log(id);