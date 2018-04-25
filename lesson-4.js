/* Задание №1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), 
rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), 
который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество 
отработанных дней days. Реализовать на ES5 функциях-конструкторах и на ES6 class. 

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31 */

function Worker ( name, surname, rate, days ) {
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;
};

Worker.prototype.getSalary = function() {
  const salary = this.rate * this.days
  return salary;
};

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

/* Задание №2. Модифицируйте класс Worker из предыдущей задачи следующим образом: 
сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31 */



/* Задание №3. Модифицируйте класс Worker из предыдущей задачи следующим образом: 
для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10 */



/* Задание №4. Реализуйте класс MyString, который будет иметь следующие методы: статический метод reverse(), 
который параметром принимает строку, а возвращает ее в перевернутом виде, статический метод ucFirst(), 
который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и статический метод ucWords, 
который принимает строку и делает заглавной первую букву каждого слова этой строки.

console.log(MyString.reverse('abcde')); //выведет 'edcba'
console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde' */



/* Задание №5. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail 
параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, 
если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, 
метод isDate для проверки даты и метод isPhone для проверки телефона:

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны */

