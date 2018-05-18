/*
* Задание 3
* Реализовать счетчик который при вызове должен возвращать число на 1 больше,
* также иметь методы set и reset, работать это должно следующим образом.
*
* const counter = makeCounter();
* counter() // 1
* counter() // 2
* counter.set(12);
* counter() // 12
* counter.reset();
* counter() // 1
*/

function makeCounter() {
  let initialValue = 0;

  const counter = () => ++initialValue;

  counter.set = (value) => {
    initialValue = --value;
  };

  counter.reset = () => {
    initialValue = 0;
  };

  return counter;
}

console.log('\nЗадание 3');
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
counter.set(12);
console.log(counter()); // 12
counter.reset();
console.log(counter()); // 1