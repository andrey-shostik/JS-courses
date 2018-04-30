/*
Реализуйте класс MyString, который будет иметь следующие методы:
статический метод reverse(), который параметром принимает строку,
а возвращает ее в перевернутом виде,
статический метод ucFirst(), который параметром принимает строку,
а возвращает эту же строку, сделав ее первую букву заглавной
и статический метод ucWords, который принимает строку и
делает заглавной первую букву каждого слова этой строки.
console.log(MyString.reverse('abcde')); //выведет 'edcba'
console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
*/

function MyString() {

    MyString.reverse = function (str) {
        return str.split('').reverse().join('');
    };

    MyString.ucFirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    MyString.ucWords = function(str) {
        return str.split(' ').map(function(item) {
            return (item.charAt(0).toUpperCase() + item.slice(1));
        }).join(' ');
    }
}

const myString = new MyString();

console.log( MyString.reverse('abcde abcde abcde') ); //выведет 'edcba edcba edcba'
console.log( MyString.ucFirst('abcde abcde abcde') ); //выведет 'Abcde abcde abcde'
console.log( MyString.ucWords('abcde abcde abcde') ); //выведет 'Abcde Abcde Abcde'