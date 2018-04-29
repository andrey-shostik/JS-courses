
/* Task-4.Реализуйте класс MyString, который будет иметь следующие методы: статический метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, статический метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и статический метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки. */

//ES-5...

function MyString() {

}

MyString.reverse = function (str) {
    return str.split("").reverse().join(",");
};

MyString.ucFirst = function (str) {
    return  str.charAt(0).toUpperCase() + str.slice(1);
};

MyString.ucWords = function (str) {
  return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

console.log(MyString.reverse('abcde')); //выведет 'edcba'
console.log(MyString.ucFirst('abcde')); //выведет 'Abcde'
console.log(MyString.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'


