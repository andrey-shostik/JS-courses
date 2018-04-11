
//Задача 1

var array = [1, 3, 5, 7];
var arraySum = 0;

array.forEach(function (item) {
    arraySum += item;
});

console.log(arraySum);


//Задача 2

var arrayOfNumbers = [10, 3, 1, 9, 2, 22];

num.sort(function(a, b){
    return a-b
});

console.log(arrayOfNumbers);


//Задача 2.2

function sortingArray(arrayOfNumbers) {
    var n = arrayOfNumbers.length;
    var j;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (arrayOfNumbers[i] > arrayOfNumbers[j]) {
                j = num[i];
                arrayOfNumbers[i] = arrayOfNumbers[j];
                arrayOfNumbers[j] = j;
                }
        }
    }
    return arrayOfNumbers;
}
console.log(sortingArray(arrayOfNumbers));

//Задача 3

var arr = [1,1,2,3,1,2];

function returnUniqueVal(value, index, self) {
    return self.indexOf(value) == index;
}
console.log( arr.filter( returnUniqueVal) );


//Задача 4

function getFibonachiNumbers(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(getFibonachiNumbers (5));
console.log(getFibonachiNumbers (10));
console.log(getFibonachiNumbers (30));



