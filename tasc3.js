// [1,1,2,3,1,2] => [1,2,3]
    var result = [];
    nextInput:
        for (var a = 0; a < arr.length; a++) {
            var str = arr[a];
            for (var b = 0; b < result.length; b++) {
                if (result[b] == str) continue nextInput;
            }
            result.push(str);
        }
    return result;
}

console.log(unique([1, 1, 1, 2, 3, 1, 2, 4, 4, 10]));