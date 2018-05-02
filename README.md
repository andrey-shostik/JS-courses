# JS-courses
1. Прочитать статьи
2. Сделать пулл реквест с выполненными заданиями

##  JS
[Замыкания, область видимости](https://learn.javascript.ru/functions-closures)

[Замыкания MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

[Замыкания в JavaScript](https://htmlacademy.ru/blog/195-lets-learn-javascript-closures)

[Currying](https://www.sitepoint.com/currying-in-functional-javascript/)

## JS задачи
1. Реализовать функцию, которая суммирует аргументы.
```javascript
function sum(x) {
  ...
}

sum(1)(2)(3) === 6
```

2. Реализовать функцию, которая суммирует аргументы, если аргумент не передан - вернуть сумму.
```javascript
function sum(x) {
  ...
}

sum(1)(2)(3)...(N)() === сумме всех чисел до N
```
Реализовать эту же функцию, только что бы для получения результата не надо было делать в конце вызов без параметров
```javascript
alert(sum(1)(2)(3)...(N))
```
