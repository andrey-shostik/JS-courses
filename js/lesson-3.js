// Массивы
const arrOfCondition = [1, 2, 3, 4, 5];

const dataOnCarPrices = `[
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
]`;

// ЗАДАЧИ **********************************

// 1
// Реализовать функцию которая возвращает массив его частичных сумм // [1,2,3,4,5] => [1, 3, 6, 10, 15]

function getPartialSumArray(arr) {
    const result = [];
    if (!arr.length) return result;

    let totalSum = arr.reduce((sum, item) => {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}

// 2
// Реализовать функцию которая вернет новый массив на основе этого https://pastebin.com/0xvghaeT, элементы которого
// должны быть объектами и иметь поля id, name и averagePrice - среднее арифметическое от суммы firstPrice и secondPrice.

function getJsonData(data) {
    const carPrices = JSON.parse(data);

    return carPrices.map(function (carData) {
        carData["averagePrice"] = (carData["firstPrice"] + carData["secondPrice"]) / 2;
        delete carData["firstPrice"];
        delete carData["secondPrice"];

        return carData;
    });
}

// 3
// Реализовать функцию которая вернет массив с элементами в которых averagePrice > 5000, элементы массива должны быть
// отсортированны по полю averagePrice, по возростанию. Массив брать из вызова функции задания 2.

function getFilteredArrayByAveragePrice(data, minAveragePrice) {
    const carPrices = getJsonData(data);

    return carPrices.filter(function (value) {
       return value["averagePrice"] > minAveragePrice;
    });
}

// 4
// Деструктурировать свойства из JSON:

function destructProperties() {

}

// *********************************

console.group('Вызовы:');

console.group('Задача №1:');
console.log(getPartialSumArray(arrOfCondition));
console.groupEnd('Задача №1:');

console.group('Задача №2:');
console.log(getJsonData(dataOnCarPrices));
console.groupEnd('Задача №2:');

console.group('Задача №3:');
console.log(getFilteredArrayByAveragePrice(dataOnCarPrices, 5000));
console.groupEnd('Задача №3:');

console.group('Задача №4:');
console.log(destructProperties());
console.groupEnd('Задача №4:');

console.groupEnd('Вызовы:');

// *********************************

