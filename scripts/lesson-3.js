console.log("////////////////////////////////// 1 /////////////////////////////////////////");
console.log(" ");
// 1. Реализовать функцию которая возвращает массив его частичных сумм c помощью
// reduce [1,2,3,4,5] => [1, 3, 6, 10, 15]

let arr = [1, 2, 3, 4, 5];

function getPartSum(arr) {
    const totalArr = [];

    let totalSum = arr.reduce(function (previousValue, currentItem) {
        totalArr.push(previousValue);

        return previousValue + currentItem
    });

    totalArr.push(totalSum);
    return totalArr
}

console.log(getPartSum(arr));

console.log(" ");
console.log("////////////////////////////////// 2 /////////////////////////////////////////");
console.log(" ");

// 2. Реализовать функцию которая вернет новый массив на основе
// этого https://pastebin.com/0xvghaeT, элементы которого должны быть объектами и
// иметь поля id, name и avaragePrice - среднее арифметическое от суммы firstPrice и
// secondPrice, нужно использовать метод map.

function getArrAvaragePrice(arr) {
    let totalArr = [];
    arr.map((item, i, arr) => {
        totalArr.push((item.firstPrice + item.secondPrice) / 2);
        item.avaragePrice = totalArr[i];
        return arr
    });

    return arr
}

console.log(getArrAvaragePrice(dataPriceCar));

console.log(" ");
console.log("////////////////////////////////// 3 /////////////////////////////////////////");
console.log(" ");

// 3. Реализовать функцию которая вернет массив с элементами в которых
// avaragePrice > 5000, элементы массива должны быть отсортированны по полю
// avaragePrice, по возростанию. Массив брать из вызова функции задания 2,
// нужно использовать методы filter и sort.


function getSortArrAvaragePrice(arr) {
    let filterArrOnAvarage = arr.filter((item, i) => {
        return item.avaragePrice > 5000

    }).sort(function (a, b) {
        return a.avaragePrice - b.avaragePrice
    });

    return filterArrOnAvarage
}

console.log(getSortArrAvaragePrice(getArrAvaragePrice(dataPriceCar)));

console.log(" ");
console.log("////////////////////////////////// 4 /////////////////////////////////////////");
console.log(" ");

// 4. Деструктурировать свойства из JSON:
//         requestId,
//         result.accountNumber,
//         result.balance.otb,
//         result.cards.ucid,
//         result.cards.expireDate
//         result.cards.expireDate.year,
//         result.overdraftInfo.lastCloseDayOverBalance,
//         result.bank.id

const {requestId} = dataUser;
console.log(requestId);

const {result: [{accountNumber}]} = dataUser;
console.log(accountNumber);

const {result: [{balance: {otb}}]} = dataUser;
console.log(otb);

const {result:[{cards:[{ucid}]}]} = dataUser;
console.log(ucid);

const {result:[{cards:[{expireDate}]}]} = dataUser;
console.log(expireDate);

const {result:[{cards:[{expireDate:{year}}]}]} = dataUser;
console.log(year);

const {result:[{overdraftInfo:{lastCloseDayOverBalance}}]} = dataUser;
console.log(lastCloseDayOverBalance);

const {result:[{bank:{id}}]} = dataUser;
console.log(id);




