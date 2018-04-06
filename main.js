
//1

var array = [1, 3, 5, 7];
var arraySum = 0;

array.forEach(function (item) {
    arraySum += item;
});

console.log(arraySum);


//2

var num = [10, 3, 1, 9, 2, 22];

num.sort(function(a, b){
    return a-b
});

console.log(num);


//2.2

function sortNumFor(num) {
    var n = num.length;
    var j;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (num[i] > num[j]) {
                j = num[i];
                num[i] = num[j];
                num[j] = j;
                }
        }
    }
    return num;
}
console.log(sortNumFor(num));

//3

var arr = [1,1,2,3,1,2];

function uniqueVal(value, index, self) {
    return self.indexOf(value) == index;
}
console.log( arr.filter( uniqueVal) );


//4

function fibonachi(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonachi (5));
console.log(fibonachi (10));
console.log(fibonachi (30));



