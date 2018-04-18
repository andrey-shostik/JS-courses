// Задача 1

const arry = [1, 2, 3, 4, 5];

function getSums(arr) {
    let result = [];
    if (!arr.length) return result;

    let totalSum = arr.reduce(function (sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}
console.log( getSums(arry) );

// Задача 2

const arryCars = [
    {"id":1,"name":"Sprinter 2500","firstPrice":8172,"secondPrice":9273},
    {"id":2,"name":"Touareg","firstPrice":5856,"secondPrice":5130},
    {"id":3,"name":"Avenger","firstPrice":8674,"secondPrice":3118},
    {"id":4,"name":"Tracer","firstPrice":8406,"secondPrice":2382},
    {"id":5,"name":"Durango","firstPrice":2093,"secondPrice":6622},
    {"id":6,"name":"968","firstPrice":7735,"secondPrice":3681},
    {"id":7,"name":"Golf","firstPrice":9363,"secondPrice":7039},
    {"id":8,"name":"Z4","firstPrice":4827,"secondPrice":6776},
    {"id":9,"name":"LaCrosse","firstPrice":3169,"secondPrice":5229},
    {"id":10,"name":"Insight","firstPrice":9030,"secondPrice":9207}];

function avaregePrice(arr) {
    return arr.map(function ({id, name, firstPrice, secondPrice}) {
        let avaragePrice = (firstPrice + secondPrice) / 2;
        return {id, name, avaragePrice}
    })
}
console.log(avaregePrice(arryCars));



// Задача 3

function arryFilterSort(arr) {
        let filterAvaragePrice = arr.filter(function (a) {
        return a.avaragePrice > 5000
    });

    let sortUP = filterAvaragePrice.sort(function (a, b) {
        return a.avaragePrice - b.avaragePrice
    });
    return sortUP
}
console.log(arryFilterSort(avaregePrice(arryCars)));












/*


let sortUP = avaregePrice(arryCars).sort(function (a,b) {
    return a.avaragePrice - b.avaragePrice
    });

console.log(sortUP);

let longWords = arryCars.filter(function (avaragePrice){
    return avaragePrice > 5000 });

console.log(longWords);

let sortUP = avaregePrice(arryCars).sort(function (a,b) {
    return a.avaragePrice - b.avaragePrice
    });

console.log(sortUP);

function isBigEnough(avaragePrice) {
    if (avaragePrice > 5000){
    return avaragePrice
}}


let isi = arryCars.filter(isBigEnough);
console.log(isBigEnough(arryCars));
console.log(isi);*/