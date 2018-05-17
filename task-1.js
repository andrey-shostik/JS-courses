/* Задание №1. Реализовать функцию, которая суммирует аргументы:
function sum(x) {
  ...
}
sum(1)(2)(3) === 6
*/


const getSumArguments = (firstArg) => {
  let sum = firstArg;
  const func = (secondArg) => {
    sum += secondArg;
    return func;
  };
  func.valueOf = () => sum;
return func;
};

console.log( getSumArguments(1)(2)(3) );
