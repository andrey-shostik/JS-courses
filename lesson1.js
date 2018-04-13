// Задание 1.Реализовать функцию которая вернет сумму элементов произвольного массива

let sumElements = function() {
  let sum = 0;

  for(let index = 0; index < arguments.length; index++) {
      sum += arguments[index];
  }
  return sum;
}

console.log(sumElements(1,2,3,4));

// Задание 2.Реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возрастанию через цикл for.

function getSortedArray() {
  let array = [1,3,-1,0,2,13],
      index ,firstValue,secondValue,thirdValue = array.length;

  for (firstValue = 0; firstValue < thirdValue; firstValue++) {
      for(index = 0; index < thirdValue-1; index++) {
        if(array[index] > array[index+1]) {
            secondValue = array[index];
            array[index] = array[index+1];
            array[index+1] = secondValue;
      }
    }
  }
  return array;
}
console.log(getSortedArray());

// Задание 2.1. Реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возрастанию через sort.
const numArray = [1,5,2,-1,7,8,3];

let sorted = numArray.sort(function (a, b) {
    return a - b;
});
console.log(sorted);

// Задание 3. Реализовать функцию которая возвращает массив с уникальными элементами

let getUniqueElements = function (arr) {
    let newArr = [];
    let index = arr.length - 1;
    let test = {};

    for (; index >= 0; index--) {
        if (arr [index] in test) continue;
        newArr.push(arr[index]);
        test[arr[index]] = 1;
    }
    return newArr;
}

let arr = ['1', 'Слово', '1', 'Слово', '2', '2'];
console.log(getUniqueElements(arr));

// Задание 4. Реализовать функцию которая возвращает массив с числами фибоначчи, количество которых зависит от переданного значения при вызове функции

function fibonacci(n) {
    const newArray = [];
    newArray[0] = 1;
    newArray[1] = 1;

    if (n <= 1 ) {
      return 1;
    } else {
      for (let index = 2; index <n ; index++) {
      newArray[index] = newArray[index-1] + newArray[index-2];
    }
  }
    return newArray;
}

console.log(fibonacci(7));
