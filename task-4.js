/* Задание №4. Реализуйте класс MyString, который будет иметь следующие методы: статический метод reverse(), 
который параметром принимает строку, а возвращает ее в перевернутом виде, статический метод ucFirst(), 
который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и статический метод ucWords, 
который принимает строку и делает заглавной первую букву каждого слова этой строки.
console.log(MyString.reverse('abcde')); //выведет 'edcba'
console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde' */

class MyString {
    static reverse(string) {
        return string.split('').reverse().join('');
    }

    static ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    static ucWords(string) {
        return string.split(' ').map(function (i) { return i[0].toUpperCase() + i.substring(1) }).join(' ');
    }
}

console.log(MyString.reverse('abcde'));
console.log(MyString.ucFirst('abcde'));
console.log(MyString.ucWords('abcde abcde abcde'));