# JS-courses
1. Прочитать статьи
2. Сделать пулл реквест с выполненными заданиями

##  Read
[Методы для перебора массивов](https://learn.javascript.ru/array-iteration)

Пересмотреть [Методы массива](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)

[Деструктуризация](https://learn.javascript.ru/destructuring)


## Tasks
1. Написать функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
Пример: delay(1000).then(() => alert("Hello!"))
2. Написать функцию в которой будет запрос на http://www.json-generator.com/api/json/get/cfQCylRjuG, из ответа ты получешь поле getUsersData, если значение равно true получи и выведи в консоль данные из http://www.json-generator.com/api/json/get/cfVGucaXPC
3. Написать функцию в которой надо будет получить данные из следующих страниц:
http://www.json-generator.com/api/json/get/cevhxOsZnS
http://www.json-generator.com/api/json/get/cguaPsRxAi
http://www.json-generator.com/api/json/get/cfDZdmxnDm
http://www.json-generator.com/api/json/get/cfkrfOjrfS
http://www.json-generator.com/api/json/get/ceQMMKpidK
Когда все данные будут загружены надо вывести в консоль массив с этими данными, должно быть два варианта этой функции, первый вариант с параллельной загрузкой, второй с последовательной.
