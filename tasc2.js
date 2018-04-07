sort:
    function compareArr(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
arr.sort(compareArr);

console.log(arr);

for:

function sortArrFor() {
    for (var i = 0; i < arr.length; i++) {
        for (var s = 0; s < arr.length; s++) {
            if (arr[s] > arr[s + 1]) {
                var sort = arr[s];
                arr[s] = arr[s + 1];
                arr[s + 1] = sort;
            }
        }
    }
    return arr;