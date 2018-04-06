//
//
//#1
const numbersArray = [3, 3, 3, 5, 8, 10, 10, 0, 34,-5, 0];
let add = function () {
    let sum = 0;
    for (i=0; i < numbersArray.length; i++) {
        sum = sum + numbersArray[i];
    }
    return sum;
};
console.log(add());




//
//
// #2.1

let firstSorting = numbersArray.sort(function (a, b) {
    return a - b;
});
console.log(firstSorting);

//
//
// #2.2

function secondSorting() {
    for (i = 0; i < numbersArray.length; i++) {
        let m = numbersArray[i];
        for (j = i - 1; j >= 0 && (numbersArray[j] > m); j--) {
            numbersArray[j+1] = numbersArray[j];
        }
        numbersArray[j+1] = m;
    }
    return numbersArray;
}
console.log(secondSorting());
//
//
//#3

function unique(arr) {
    let result = [];

    nextInput:
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i];
            for (let j = 0; j < result.length; j++) {
                if (result[j] === str) continue nextInput;
            }
            result.push(str);
        }

    return result;
}



console.log(unique(numbersArray));

//
//
// #4

const input = +(prompt('Ведите количество чисел фибоначи: '));
const fibArray = [];

function fib() {
    let a = 1,
        b = 1;
    for (let i = 3; i <= input; i++) {
        let c = a + b;
        a = b;
        b = c;
        fibArray.push(b);
    }
    fibArray.unshift(1, 1);
    return fibArray;
}

console.log(fib());

// That's all



