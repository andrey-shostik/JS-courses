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
    for(var i = 0; i<arr3.length; i++){
        var num = arr3[i];
        obj[num] = true;
    }


    return Object.keys(obj);
};

console.log(unic(arr3));