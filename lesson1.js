// Задание 1.Реализовать функцию которая вернет сумму элементов произвольного массива

var funcSumElements = function() {
    let i;
    let sum = 0;
    for(i = 0; i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum;
  }

  console.log(funcSumElements(1,2,3,4));

// Задание 2.Реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возрастанию через цикл for.

  function funcSort() {
  let a = [4,1,5,9,2,3],
      i ,b,c,n = a.length;
  for (b = 0; b < n;b++){
  for(i = 0; i < n-1; i++){
    if(a[i] > a[i+1]){
      c = a[i];
      a[i] = a[i+1];
      a[i+1] = c;
    }
  }
  }
  return a;
  }
  console.log(funcSort());

// Задание 2.1. Реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возрастанию через sort.
var numArray = [1,5,2,-1,7,8,3];
var Sorting = numArray.sort(function (a, b) {
    return a - b;
});
console.log(Sorting);

// Задание 3. Реализовать функцию которая возвращает массив с уникальными элементами

var uniqueEl = function (arr) {
    let newArr = [];
    let i = arr.length - 1;
    let test = {};
    for (; i >= 0; i--) {
        if (arr [i] in test) continue;
        newArr.push(arr[i]);
        test[arr[i]] = 1;
    }
    return newArr;
}

var arr = ['1', 'Слово', '1', 'Слово', '2', '2'];
console.log(uniqueEl(arr));

// Задание 4. Реализовать функцию которая возвращает массив с числами фибоначчи, количество которых зависит от переданного значения при вызове функции

function fibonacci(n) {
    let newArray = [];
    newArray[0] = 1;
    newArray[1] = 1;
    if (n <= 1 ){
        return 1;
    } else {
        for ( var i = 2; i <n; i++)
         newArray[i] = newArray[i-1] + newArray[i-2];
    }
    return newArray;
}

console.log(fibonacci(7));
