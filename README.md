# JS-courses
1. Прочитать статьи
2. Сделать пулл реквест с выполненными заданиями

##  JS
[Что такое ООП](https://habrahabr.ru/post/148015/)

[ООП в функциональном стиле](https://learn.javascript.ru/oop)

[ООП в прототимном стиле](https://learn.javascript.ru/prototypes)

[ООП из MDN](https://developer.mozilla.org/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/Object-oriented_JS)

[Дескрипторы, геттеры и сеттеры свойств](https://learn.javascript.ru/descriptors-getters-setters)

[Статические и фабричные методы](https://learn.javascript.ru/static-properties-and-methods)

## JS задачи
1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
```
const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
```

2. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
```
const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
```

3. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
```
const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
```

4. Реализуйте класс MyString, который будет иметь следующие методы: статический метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, статический метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и статический метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
```
console.log(MyString.reverse('abcde')); //выведет 'edcba'
console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
```

5.  Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:
```
const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны
```

6.  Реализуйте класс BaseValidator, который будет иметь один публичный метод в прототипе validate. Также нужно реализовать классы EmailValidator, DomainValidator, DateValidator, PhoneValidator, которые будут наследоваться от BaseValidator и определять метод validate каждый по-своему. Дополнительное задание: в классах(не в прототипах) EmailValidator, DomainValidator, DateValidator, PhoneValidator реализовать кэширование. Непосредственно в классе(не в прототипе) BaseValidator реализовать метод getCachedValue, который будет брать закэшированное значение из нужного класса и возвращать его вместо вычеслений.
```
const emailValidator = new EmailValidator();
const domainValidator = new DomainValidator();
const dateValidator = new DateValidator();
const phoneValidator = new PhoneValidator();

console.log(emailValidator.validate('phphtml@mail.ru'));
console.log(domainValidator.validate('phphtml.net'));
console.log(dateValidator.validate('12.05.2020'));
console.log(phoneValidator.validate('+375 (29) 817-68-92')); //тут можете формат своей страны
```

PS. Реализовать на ES5 функциях-конструкторах и на ES6 class. Т.е создаем под одну задачу два фала, например validator-es6.js, validator-es5.js
