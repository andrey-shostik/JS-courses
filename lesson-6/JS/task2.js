/*
* Задание 2
* Реализовать функцию, которая суммирует аргументы, если аргумент не передан - вернуть сумму.
*
* function sum(x) {
*   ...
* }
*
* sum(1)(2)(3)...(N)() === сумме всех чисел до N
*
*
* Реализовать эту же функцию, только с возможностью получения значения без дополнительного пустого вызова.
*
* alert(sum(1)(2)(3)...(N))
*/

// Задание 2.1
function sum(arg) {
  return nextArg => nextArg ? sum(arg + nextArg) : arg;
}

console.log('\nЗадание 2.1');
console.log( sum(1)(2)(3)(4)(5)(6)() );

// Задание 2.2
function sumWOEmpty(arg) {
  const add = nextArg => sumWOEmpty(arg + nextArg);
  add.toString = () => arg;
  return add;
}

alert(sumWOEmpty(1)(2)(3)(4)(5)(6));