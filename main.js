var randomValuesArray = [ 1, 5, 6, 8, 9, 44, 2, 1, 1, 3, 7 ];
function getSumElements (arr) {
    var sumElements = 0;
    for (var i=0; i<randomValuesArray.length; i++){
        sumElements += randomValuesArray[i];
    }
    return (sumElements);
};
console.log(getSumElements(randomValuesArray));



function getAscendingArrey (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
};
console.log(randomValuesArray.sort(getAscendingArrey));



function getUnicArrayValues (randomValuesArray) {
    var obj = {};
    for(var i = 0; i<randomValuesArray.length; i++) {
        var num = randomValuesArray[i];
        obj[num] = true;
    }
    var result = [];
    for(var j = 0; j<randomValuesArray.length; j++){
        var value = randomValuesArray[j];
         if (obj[value] == true){
             result.push(value);
             obj[value] = false;
         }

    }
    return result;
};

console.log(getUnicArrayValues(randomValuesArray));

function getFibValues(a) { // не правильно работает с 0 1
    var fibvalues = [];
    for (var i = 0; i<3; i++) {
        if (i == 0 || i == 1) {
            fibvalues.push(1);
        }
    }

        for (i = 3; i <= a; i++){
            var first = fibvalues[i-2];
            var second = fibvalues[i-3];
            var next = first + second;
            fibvalues.push(next);
        }
    return fibvalues;
    }
console.log(getFibValues(10));