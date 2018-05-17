/* Задание №3. Реализовать счетчик который при вызове должен возвращать число на 1 больше, также иметь методы set и reset
работать это должно следующим образом.

const counter = makeCounter();
counter() // 1
counter() // 2
counter.set(12);
counter() // 12
counter.reset();
counter() // 1
*/

function makeCounter() {
  let currentCount = 1;
  function counter() {
    return currentCount++;
  };
  counter.set = function(value) {
    currentCount = value;
  };
  counter.reset = function() {
    currentCount = 1;
  };
  return counter;
}
  
const counter = makeCounter();
