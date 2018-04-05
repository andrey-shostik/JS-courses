var arr = [ 1, 5, 6, 8, 9 ];
function sumElements (arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return (sum);
};
console.log(sumElements(arr));


var arr2 = [2, 1, 9, 44, 4];

function ascending (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
};
console.log(arr2.sort(ascending));

var arr3 = [1,1,2,3,1,2,3];
function unic (arr3) {
    var obj = {};
    for(var i = 0; i<arr3.length; i++) {
        var num = arr3[i];
        obj[num] = true;
    }
    var result = [];
    for(var j = 0; j<arr3.length; j++){
        var value = arr3[j];
         if (obj[value] == true){
             result.push(value);
             obj[value] = false;
         }

    }
    return result;
};

console.log(unic(arr3));

function getFibValues(a) { // не правильно работает с 0 1 2
    var fibvalues = [];
    for (var i = 0; i<3; i++) {
        if (i == 0 || i == 1) {
            fibvalues.push(1);
        }
    }

        for (i = 3; i < a; i++){
            var first = fibvalues[i-2];/
            var second = fibvalues[i-3];
            var next = first + second;
            fibvalues.push(next);
        }
    return fibvalues;
    }
console.log(getFibValues(0));