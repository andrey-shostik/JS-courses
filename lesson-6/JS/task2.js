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
function sum(value) {
  return nextValue => nextValue ? sum(value +nextValue) : value;
}

console.log('\nЗадание 2.1');
console.log( sum(1)(2)(3)(4)(5)(6)() );

// Задание 2.2
function sum2(value) {
  const add = nextValue => sum2(value + nextValue);
  add.toString = () => value;
  return add;
}

alert(sum2(1)(2)(3)(4)(5)(6));