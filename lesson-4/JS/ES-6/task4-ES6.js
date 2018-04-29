// Задание 4. ES6

/*
* Реализуйте класс MyString, который будет иметь следующие методы:
*
* статический метод reverse(), который параметром принимает строку,
* а возвращает ее в перевернутом виде,
*
* статический метод ucFirst(), который параметром принимает строку,
* а возвращает эту же строку, сделав ее первую букву заглавной
*
* и статический метод ucWords, который принимает строку и
* делает заглавной первую букву каждого слова этой строки.
*
* console.log(MyString.reverse('abcde')); //выведет 'edcba'
* console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
* console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
*/

class MyString {

  static reverse(str) {
    return str.split('').reverse().join('');
    };

  static ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
    };

  static ucWords(str) {
    return str.split(' ').map( (item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
    };
}

console.log('Задание 4. ES6');

console.log( MyString.reverse('abcde abcde abcde') ); //выведет 'edcba edcba edcba'
console.log( MyString.ucFirst('abcde abcde abcde') ); //выведет 'Abcde abcde abcde'
console.log( MyString.ucWords('abcde abcde abcde') ); //выведет 'Abcde Abcde Abcde'