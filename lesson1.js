// Задание 1.Реализовать функцию которая вернет сумму элементов произвольного массива

var funcSumElements = function() {
    var i;
    var sum = 0;
    for(i = 0; i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum;
  }

  console.log(funcSumElements(1,2,3,4));

// Задание 2.Реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возрастанию через цикл for.

  function funcSort() {
  var a = [4,1,5,9,2,3],
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

// Задание 3. Реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возрастанию через sort.
var numArray = [1,5,2,-1,7,8,3];
var Sorting = numArray.sort(function (a, b) {
    return a - b;
});
console.log(Sorting);
