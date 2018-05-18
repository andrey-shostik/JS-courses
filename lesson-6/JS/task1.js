/*
* Задание 1
* Реализовать функцию, которая суммирует аргументы.
*
* function sum(x) {
*  ...
* }
*
* sum(1)(2)(3) === 6
*/

 function sum(value) {
  let result = (nextValue) => {
    value += nextValue;
    return result;
  }

  result.toString = () => value;

  return result;
}

console.log('Задание 1');
console.log( sum(1)(2)(3) );