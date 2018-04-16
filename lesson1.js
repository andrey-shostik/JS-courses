var arr1 = [1,2,3,4,5];

function ArrSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
}

function SortArr1(arr) {
  var n = arr.length;
  for (j = 0; j < n; j++){
    for (i = 0; i < n - 1; i++){
      if (arr[i] > arr[i + 1]){
        k = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = k;
      }
    }
  }
  return arr;
}


function SortArr2 (a, b) {
  return a  -b;
}


function UniqueArr(arr) {
  var result = [];
  for (i = 0; i < arr.length; i++){
    var str = arr[i];
    for (j = 0; j < result.length; j++){
      if (result[j] == str) continue;
    }
    result.push(str);
  }
  return result;
}