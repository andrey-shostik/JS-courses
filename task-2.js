/* Задание №2.1. Реализовать функцию, которая суммирует аргументы, если аргумент не передан - вернуть сумму.
function sum(x) {
  ...
}
sum(1)(2)(3)...(N)() === сумме всех чисел до N

Задание №2.2. Реализовать эту же функцию, только с возможностью получения значения без дополнительного пустого вызова.
alert(sum(1)(2)(3)...(N))
*/

// Универсальное решение:

function getSumArguments(value) {
  let result = value;
  function getSumArguments(nextValue) {
    if (nextValue === undefined) {
      result;
    } else {
      result += nextValue
      }
    return getSumArguments;
  };
  getSumArguments.toString = function() {
    return result;
  };
  return getSumArguments;
}

console.log( getSumArguments(1)(2)(3)() );
