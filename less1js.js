// 1)Реализовать функцию которая вернет сумму элементов произвольного массива:

function mySum(n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum
}
console.log(mySum([3, 23, 26, 40, 50]));

// 2. Реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, сделать двумя способами,
//  через метод sort и через цикл for:

// 2.1)Sort
var myMass = [56, 7, 657, 0, 567, 4, 9];
function firstSort(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}
myMass.sort(firstSort);
console.log(myMass);

//
var array = [1, 2, 1, 10, 5, 3, 4, 40, 50], i = array.length, result = [];
 
array.sort(function(a,b) {
    return b-a;
});
 
while(i--){
    if(result.join().search(array[i]+'\\b') == '-1') {
        result.push(array[i]);
    }
}
 
console.log(result);


// 2.2)For

function bubble(n) {
    var result = [];
    nextInput:
    for (var i = 0; i < n.length; i++) {
        var B = n[i];
        for (var j = 0; j < result.length; j++) {
            if (result[j] == B) continue nextInput;
        }
        result.push(B);
    }
    return result;
// 3. Реализовать функцию которая возвращает массив с уникальными элементами // [1,1,2,3,1,2] => [1,2,3]

var myMass = [2,4 , 2, 10, 5, 3, 4, 10, 678], i = myMass.length, result = [];
 
myMass.sort(function(a,b) {
    return b-a;
});
 
while(i--){
    if(result.join().search(myMass[i]+'\\b') == '-1') {
        result.push(myMass[i]);
    }
}
 
console.log(result);

// 4)Реализовать функцию которая возвращает массив с числами фибоначчи, количество которых
// зависит от переданного значения при вызове функции
function fib(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
console.log(fib(45));
