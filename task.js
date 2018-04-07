
var arr = [1,2,5,4,31,10];


//task1

function arrSum(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}
arrSum(arr);

//task2
//a
function compareArr(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
arr.sort(compareArr);

console.log(arr);

//b

function sortArrFor() {
    for(var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                var sort = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = sort;
            }
        }
    }
    return arr;
}
console.log(sortArrFor());

//3 ещё думаю


//4 ещё думаю

