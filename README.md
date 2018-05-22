# JS-courses
1. Прочитать статьи
2. Сделать пулл реквест с выполненными заданиями

##  Read
[Промисы](https://learn.javascript.ru/promise)

[Fetch](https://learn.javascript.ru/fetch)

[Async func](https://habr.com/company/ruvds/blog/326074/)


## Tasks
1. Написать функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
Пример: delay(1000).then(() => alert("Hello!"))
2. Написать функцию в которой будет запрос на http://www.json-generator.com/api/json/get/cfQCylRjuG, из ответа приходит поле getUsersData, если значение равно true то надо получить и вывести в консоль данные из http://www.json-generator.com/api/json/get/cfVGucaXPC, должно быть два варианта этой функции, с использованием промисов и с использованием async/await
3. Написать функцию в которой надо будет получить данные из следующих страниц:
```
http://www.json-generator.com/api/json/get/cevhxOsZnS
http://www.json-generator.com/api/json/get/cguaPsRxAi
http://www.json-generator.com/api/json/get/cfDZdmxnDm
http://www.json-generator.com/api/json/get/cfkrfOjrfS
http://www.json-generator.com/api/json/get/ceQMMKpidK
```
Когда все данные будут загружены надо вывести в консоль массив с этими данными, должно быть два варианта этой функции, первый вариант с параллельной загрузкой, второй с последовательной.
