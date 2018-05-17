/* Задание №1. Реализовать функцию, которая суммирует аргументы:
function sum(x) {
  ...
}
sum(1)(2)(3) === 6
*/


function getSumArguments(value) {
  getSumArguments.result = (getSumArguments.result) ? getSumArguments.result += value : value;
  getSumArguments.valueOf = function() {
    return getSumArguments.result;
  }
  return getSumArguments;
}

console.log( getSumArguments(1)(2)(3) );
