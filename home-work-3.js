//Task-1
function getSums(arr) {
    const result = [];
    if (!arr.length) return result;

    const SumIndividualElements = arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(SumIndividualElements);

    return result;
}
console.log(getSums([0,1,2,3,4,5,6]));
//Task-2
const givenArray = [
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
    let arrayAvaragePrice = [];
    arrayAvaragePrice = array.map(function (item) {
        let {id, name, firstPrice, secondPrice} = item;
        let avaragePrice = (firstPrice + secondPrice) / 2;
        return {id, name, avaragePrice};
    });
    return arrayAvaragePrice;
};
let arrayAvaragePrice = getArrayOfObjs(givenArray);
console.log(arrayAvaragePrice);

//Task-3
const getSortedArray = array => {
    let newFilterArray = [];
    newFilterArray = array.filter(({avaragePrice}) => avaragePrice > 5000)
.sort(function (index1, index2) {
        if (index1.avaragePrice > index2.avaragePrice) {
            return 1;
        }
    });
    return newFilterArray;
};

let sortedArray = getSortedArray(arrayAvaragePrice);
console.log(sortedArray);
//Task-4

let givenObj = {
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
const {requestId} = givenObj;
const {result:[{accountNumber}]} = givenObj;
const {result:[{balance: {balance, otb}}]} = givenObj;
const {result:[{cards: [{ucid}]}]} = givenObj;
const {result:[{cards: [{expireDate}]}]} = givenObj;
const {result:[{cards: [{expireDate: {year}}]}]} = givenObj;
const {result:[{overdraftInfo: {lastCloseDayOverBalance}}]} = givenObj;
const {result:[{bank: {id}}]} = givenObj;

console.log(requestId, accountNumber, balance, otb, ucid, expireDate, year, lastCloseDayOverBalance, id);
