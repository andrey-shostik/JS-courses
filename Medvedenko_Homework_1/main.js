const arr1 = [5,4,2,3,1];
const arr2 = [100, 99, 1, 50];
const arr3 = [5,5,5,3,3,6,7,8,9,43,43,5,6,7,8];

function sumArr (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

console.log(`test №1 : ${sumArr(arr1)}`); // 15
console.log(`test №2 : ${sumArr(arr2)}`); // 250

function compareNumbers(a, b) {
    return a - b;
}

console.log(`sort №1 : ${arr1.sort(compareNumbers)}`); //[ 1, 2, 3, 4, 5 ]
console.log(`sort №2 : ${arr2.sort(compareNumbers)}`); //[ 1, 50, 99, 100 ]

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]){
                arr[i], arr[j] = arr[j], arr[i];
            }
        }

    }
    return arr;

}

console.log(`sortFor №1 : ${sort(arr1)}`); //[ 1, 2, 3, 4, 5 ]
console.log(`sortFor №2 : ${sort(arr2)}`); //[ 1, 50, 99, 100 ]

function filter(arr) {
        let result = [];
        next:
        for (let i = 0; i < arr.length; i++) {
                let str = arr[i];
                for (let j = 0; j < result.length; j++) {
                        if (result[j] === str) continue next;
                    }
               result.push(str);
            }
        return result;
}

console.log(`filter №2 : ${filter(arr3)}`); //[ 5,3,6,7,8,9,43 ]


function fib(n) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(`fib №2 : ${fib(7)}`);