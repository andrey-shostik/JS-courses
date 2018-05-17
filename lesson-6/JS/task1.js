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

function sum(firstarg) {

  let curry = (nextarg) => {
    firstarg += nextarg;
    return curry;
  }

  curry.toString = () => firstarg;

  return curry;
}

console.log('Задание 1');
console.log( sum(1)(2)(3) );