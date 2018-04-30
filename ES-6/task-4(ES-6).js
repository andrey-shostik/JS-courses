/* Task-4.Реализуйте класс MyString, который будет иметь следующие методы: статический метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, статический метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и статический метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки. */

//ES-6...

class MyString {
    static reverse(str) {
        return str.split("").reverse().join(",");
    };

    static ucFirst(str) {
        return  str.charAt(0).toUpperCase() + str.slice(1);
    };

    static ucWords(str) {
        return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    };
}


console.log(MyString.reverse('abcde')); //выведет 'edcba'
console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
