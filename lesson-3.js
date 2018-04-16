// задание 1: Реализовать функцию которая возвращает массив его частичных сумм c помощью reduce // [1,2,3,4,5] => [1, 3, 6, 10, 15]

function getPartialSumArray(arr) {
  var result = [];
    if (!arr.length) return result;

  var totalSum = arr.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });
  
  result.push(totalSum);
  return result;
}
console.log( getPartialSumArray([3,12,4,1,156,42,17]) );

/* задание 2: Реализовать функцию которая вернет новый массив на основе этого https://pastebin.com/0xvghaeT, элементы
   которого должны быть объектами и иметь поля id, name и avaragePrice - среднее арифметическое от суммы
   firstPrice и secondPrice, нужно использовать метод map. */




/* задание 3: Реализовать функцию которая вернет массив с элементами в которых avaragePrice > 5000, элементы массива 
   должны быть отсортированны по полю avaragePrice, по возростанию. Массив брать из вызова функции задания 2, 
   нужно использовать методы filter и sort. */




/* задание 4: 
   Деструктурировать свойства из JSON:
   requestId,
   result.accountNumber,
   result.balance.otb,
   result.cards.ucid,
   result.cards.expireDate,
   result.cards.expireDate.year,
   result.overdraftInfo.lastCloseDayOverBalance,
   result.bank.id */
