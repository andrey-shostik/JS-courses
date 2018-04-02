var arr = [1, 10, 15, 25, 40];
function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
arraySum(arr);