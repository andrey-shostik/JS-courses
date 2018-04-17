
//Задача 1

var array = [1, 3, 5, 7];
var arraySum = 0;

array.forEach(function (item) {
    arraySum += item;
});

console.log(arraySum);


//Задача 2

var arrayOfNumbers = [10, 3, 1, 9, 2, 22];

arrayOfNumbers.sort(function(a, b){
    return a-b
});

console.log(arrayOfNumbers);


//Задача 2.2

function sortingArray(arrayOfNumbers) {
    var n = arrayOfNumbers.length;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (arrayOfNumbers[i] > arrayOfNumbers[j]) {
                j = arrayOfNumbers[i];
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
    var firstNum = 1;
    var secondNum = 1;
    var nextNum = 3;
    for (nextNum; nextNum <= n; nextNum++) {
        var sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
    }
    return secondNum;
}
console.log(getFibonachiNumbers (5));
console.log(getFibonachiNumbers (10));
console.log(getFibonachiNumbers (30));



