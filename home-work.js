//Task:1
const aArray= [1, 1341, 24, 533, -645, 432, 543];
let add = function () {
    let sum = 0;
    for (i=0; i < aArray.length; i++) {
        if (typeof(aArray[i]) === 'number') {
            sum += aArray[i];
        }
    }
    return sum;
};
console.log(add());
//Task:2.1

let getSortingElements = aArray.sort(function (a, b) {
    return a - b;
});
console.log(getSortingElements);

//Task:2.2

function Sorting() {
    let aArray = [124,13,55,945,3462, 37474],
        i ,a,b,c = aArray.length;
    for (b = 0; b < c;a++){
        for(i = 0; i < c-1; i++){
            if(aArray[i] > aArray[i+1]){
                b = aArray[i];
                aArray[i] = aArray[i+1];
                aArray[i+1] = b;
            }
        }
    }
    return aArray;
}
console.log(Sorting());


//Task:3

var uniqueElements = function (aArray) {
    let newArr = [];
    let i = aArray.length - 1;
    let test = {};
    for (; i >= 0; i--) {
        if (aArray [i] in test) continue;
        newArr.push(aArray[i]);
        test[aArray[i]] = 1;
    }
    return newArr;
}

var aArray = ['1', 'Data', '2', 'Data', '2', '1'];
console.log(uniqueElements(aArray));

//Task:4
var input = +(prompt('Уведіть кількість чисел Фібоначчі: '));
function fibonacci(a) {
    let fibonacciArray = [];
    fibonacciArray[0] = 1;
    fibonacciArray[1] = 1;
    if (a <= 1 ){
        return 1;
    } else {
        for ( let i = 2; i <a; i++)
            fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
    }
    return fibonacciArray;
}

console.log(fibonacci(input));
