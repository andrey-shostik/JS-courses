//
//
// #1

const generalArray = [1, 2, 3, 4, 5, 6, 8, 17, -2];

const getSums = (array) => {
    const newArray = [];
    if (!array.length) {
        return newArray;
    }
    const totalAmount = array.reduce(function (sum, item) {
        newArray.push(sum);
        return sum + item;
    });
    newArray.push(totalAmount);
    return newArray;
};
console.log(getSums(generalArray));

//
//
// #2


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

const getArrayOfObjs = (array) => {
    let arrayWithAvaragePrice = [];
    arrayWithAvaragePrice = array.map(function (item) {
        let {firstPrice, secondPrice, id, name} = item;
        let avaragePrice = (firstPrice + secondPrice) / 2;
        return {id, name, avaragePrice};
    });
    return arrayWithAvaragePrice;
};
let arrayWithAvaragePrice = getArrayOfObjs(infoCarsArray);
console.log(arrayWithAvaragePrice);

//
//
//#3
const getSortedArray = array => {
    let newArray = [];
    newArray = array.filter(({avaragePrice},item) => item > 5000)
    .sort(function (a, b) {
        if (a.avaragePrice > b.avaragePrice) {
            return 1;
        }
    });
    return newArray;
};

let sortedArray = getSortedArray(arrayWithAvaragePrice);
console.log(sortedArray);
//
//
// #4

let generalObj = {
    requestId: 'eed3fc9d337261ea23f0',
    result: [
        {
            accountNumber: '40802810800000018334',
            agreementNumber: '7000351523',
            type: 14,
            status: 'NORM',
            tariffCode: 'TFLE1.1',
            createdOn: '2016-09-14T00:00:00',
            currency: '643',
            mainFlag: 'Y',
            balance: {
                balance: 0,
                otb: 0,
                authorized: 0,
                pendingPayments: 0,
                pendingRequisitions: 0
            },
            newBalance: {
                balance: 0,
                otb: 0,
                authorized: 0,
                pendingPayments: 0,
                pendingRequisitions: 0,
                techOver: 0
            },
            stats: {
                debit: 0,
                credit: 0,
                interest: 0
            },
            cards: [
                {
                    number: '553420******3894',
                    expireDate: {
                        year: 2021,
                        month: 9
                    },
                    embossedName: 'DAVID UBILAVA',
                    name: 'DAVID UBILAVA',
                    isActive: true,
                    ucid: 1024452429,
                    status: 'BAML',
                    ownedByCurrentUser: true
                }
            ],
            overIsAvailable: 0,
            overdraftInfo: {
                amount: 0,
                clientIsInOver: 0,
                lastCloseDayOverBalance: 0,
                currentVirtualOverBalance: 0,
                fullOverBalance: 0
            },
            activationDate: '2016-09-16T00:00:00',
            bank: {
                id: 99,
                name: 'tcs-sme',
                bic: '044525974',
                isExternal: false
            }
        }
    ],
    success: true
};
const {requestId} = generalObj;
const {result:[{accountNumber}]} = generalObj;
const {result:[{balance: {balance, otb}}]} = generalObj;
const {result:[{cards: [{ucid}]}]} = generalObj;
const {result:[{cards: [{expireDate}]}]} = generalObj;
const {result:[{cards: [{expireDate: {year}}]}]} = generalObj;
const {result:[{overdraftInfo: {lastCloseDayOverBalance}}]} = generalObj;
const {result:[{bank: {id}}]} = generalObj;

console.log(requestId, accountNumber, balance, otb, ucid, expireDate, year, lastCloseDayOverBalance, id);