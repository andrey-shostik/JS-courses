# JS-courses
1. Прочитать статьи
3. При выполнении заданний надо использовать деструктуризацию где это можно
2. Сделать пулл реквест с выполненными заданиями

##  JS
[Методы для перебора массивов](https://learn.javascript.ru/array-iteration)

Пересмотреть [Методы массива](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)

[Деструктуризация](https://learn.javascript.ru/destructuring)


## JS задачи
1. Реализовать функцию которая возвращает массив его частичных сумм // [1,2,3,4,5] => [1, 3, 6, 10, 15]
2. Реализовать функцию которая вернет новый массив на основе этого https://pastebin.com/0xvghaeT, элементы которого должны быть объектами и иметь поля id, name и avaragePrice - среднее арифметическое от суммы firstPrice и secondPrice.
3. Реализовать функцию которая вернет массив с элементами в которых avaragePrice > 5000, элементы массива должны быть отсортированны по полю avaragePrice, по возростанию. Массив брать из вызова функции задания 2.
4. Деструктурировать свойства из [JSON](https://pastebin.com/tTqELBxC): 
    * requestId, 
    * result.accountNumber, 
    * result.balance.otb, 
    * result.cards.ucid, 
    * result.cards.expireDate
    * result.cards.expireDate.year,
    * result.overdraftInfo.lastCloseDayOverBalance, 
    * result.bank.id
    
   Пример: 
   ```
   const {requestId} = {...};
   const {requestId123} = {...};
   ```
PS. Обязательное условие - пишем на новом стандарте. var => let/const, () => {} вместо function - когда актуально и т.д. Кто еще не ознакомился - [ES6](https://learn.javascript.ru/es-modern)