//
//
//#1
const generalArray = [3, 3, 3, 5, 8, 10, '1', '2', true, 10, 0, 34, undefined, null, -5, 0];
let add = function (someArray) {
    let sum = 0;
    for (i=0; i < someArray.length; i++) {
        if (typeof(someArray[i]) === 'number') {
            sum += someArray[i];
        }
    }
    return sum;
};
console.log(add(generalArray));




//
//
// #2.1

let firstSorting = generalArray.sort(function (a, b) {
    return a - b;
});
console.log(firstSorting);

//
//
// #2.2

function secondSorting(arr) {
    for (i = 0; i < arr.length; i++) {
        let m = generalArray[i];
        for (j = i - 1; j >= 0 && (arr[j] > m); j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = m;
    }
    return arr;
}
console.log(secondSorting(generalArray));
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

console.log(unique(generalArray));

//
//
// #4.1

const input = +(prompt('Ведите количество чисел фибоначи: '));
const fibArray = [];

function fib(n) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        fibArray.push(b);
    }
    fibArray.unshift(1, 1);
    return fibArray;
}

console.log(fib(input));


//
//
//4.2

function getFibon(n) {
    let fibonachiArray = [];
    fibonachiArray[0] = 1;
    fibonachiArray[1] = 1;
    if (n <= 1 ){
        return 1;
    } else {
        for ( let i = 2; i <n; i++)
            fibonachiArray[i] = fibonachiArray[i-1] + fibonachiArray[i-2];
    }
    return fibonachiArray;
}

console.log(getFibon(input));
/// That's all