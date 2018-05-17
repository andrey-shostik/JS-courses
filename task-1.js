/* Задание №1. Реализовать функцию, которая суммирует аргументы:
function sum(x) {
  ...
}
sum(1)(2)(3) === 6
*/


const getSumArguments = (value) => {
  let currentSum = value;
  const getResult = (nextValue) => {
    currentSum += nextValue;
    return getResult;
  };
  getResult.toString = () => {
    return currentSum;
  };
  return getResult;
}

getSumArguments(1)(2)(3);
